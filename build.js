const pkg = require('./package.json')
const { pipe, pathOr } = require('ramda')
const dist = pathOr('dist', ['meta', 'target'], pkg)

// **** require pipe functions ****
const initBuild = require('./lib/init')(dist)
const getContent = require('./lib/content')
const createBlogPage = require('./lib/create-blog-page')(pkg)(dist)
const createArticles = require('./lib/create-articles')(pkg)(dist)
const copyAssets = require('./lib/assets')(dist)

// pipeline
pipe(
  initBuild,
  getContent,
  createBlogPage,
  createArticles,
  copyAssets
)()
