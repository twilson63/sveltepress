require('svelte/register')
const fs = require('fs')
const createTemplate = require('./template')
const Blog = require('../components/Blog.svelte').default

const createPage = (Component, props, dest, pkg) => {
  const template = createTemplate(pkg)
  const { html, head } = Component.render(props)
  fs.writeFileSync(dest, template(head, html))
}

/**
 * createBlogPage
 *
 * creates a blog page using the blog svelte component
 *
 */
module.exports = pkg => dist => articles => {
  const targetPathname = name => `./${dist}/${name}.html`
  createPage(Blog, { meta: pkg.meta, articles}, targetPathname('index'), pkg)
  return articles
}