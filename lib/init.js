const shell = require('shelljs')

/**
 * initBuild
 *
 * Removes deploy directory and creates
 * the deploy directory, this will clean 
 * out any non supported files
 *
 * if files you place in the dist directory 
 * are being deleted use the /content/assets 
 * directory
 */
module.exports = dir => () => {
  shell.rm('-rf', dir)
  shell.mkdir(dir)
}
