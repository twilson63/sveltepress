require('svelte/register')
const fs = require('fs')
const { map, pipe, filter, assoc } = require('ramda')
const yamlFront = require('yaml-front-matter')
const marked = require('marked')
const shell = require('shelljs')

const Blog = require('./components/Blog.svelte').default
const Post = require('./components/Post.svelte').default

// pure functions
const isMarkdown = name => /.md$/.test(name)
const parse = name => {
  const md = fs.readFileSync('./content/' + name, 'utf-8')
  return yamlFront.loadFront(md)
}
const template = (head, html) => `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Blog</title>
    ${head}
  </head>
  <body>
    ${html}
  </body>
</html>`

const createArticle = article => {
 article = assoc('content', marked(article.__content), article)
  
 const { html, head } = Post.render({ blog: {title: 'MyBlog'}, article })
 fs.writeFileSync('./dist/' + article.ID + '.html', template(head, html))
}

// create dist
shell.mkdir('dist')
// build index.html


const files = fs.readdirSync('./content')
const data = pipe(
  filter(isMarkdown),
  map(parse)
)(files)


const { html, head }  = Blog.render({ articles: data })
// render index template
fs.writeFileSync('./dist/index.html', template(head, html))

console.log('create index.html')

// build articles
map(createArticle, data)

console.log('created articles')


// copy assets over ot dist
//
shell.mkdir('-p', 'dist/assets')
shell.cp('-rf', './assets','./dist')
console.log('---- copied assets ----')

//

