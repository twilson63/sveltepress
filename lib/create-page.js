const fs = require('fs')
const createTemplate = require('./template')
/**
 * create
 *
 * creates an html page using the render function and template
 *
 */
module.exports = (Component, props, dest, pkg) => {
  const template = createTemplate(pkg)
  const { html, head } = Component.render(props)
  fs.writeFileSync(dest, template(head, html))
}

