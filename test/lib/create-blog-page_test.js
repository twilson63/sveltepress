const test = require('tape')
const rewire = require('rewire')

const createBlogPageHOF = rewire('../../lib/create-blog-page')

test('Create Blog HTML page from component', t => {
  createBlogPageHOF.__set__('fs', {
    writeFileSync: (dest, data) => {
      t.ok(/A test article/.test(data), 'Created Item for test article')

      t.ok(true, 'successfully called writeFile')
      return
    }
  })
  const pkg = { meta: {title: 'Foo'}}

  const createBlog = createBlogPageHOF(pkg)('foo')
  createBlog([{ID: '1', title: 'A test article', content: '<h1>Foo</h1>'}])
  t.end()
})
