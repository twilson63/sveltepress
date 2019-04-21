const { pathOr } = require('ramda')

/**
 * template
 *
 * basic html template to generate static html pages
 *
 */
module.exports = pkg => (head, html, css) => `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" >
    <title>${pathOr('Blog', ['meta', 'title'], pkg)}</title>
    ${head}
    <style>
      ${css}
    </style>
  </head>
  <body>
    ${html}
  </body>
</html>`



