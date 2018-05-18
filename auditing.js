const fs = require('mz/fs')
const ghDescription = require('gh-description')
const mkdirp = require('mkdirp-promise')
const getDirName = require('path').dirname

module.exports = async function download (repoName, dest) {
  if (!repoName) {
    throw new Error('A GitHub repository directory must be provided! Format: probot/probot')
  }

  dest = dest || `${repoName.split('/')[1]}-audit.md`

  await fs.readFile('audit-template.md').then(async res => {
    console.log('Replacing repo name and description...')

    let description = await ghDescription(repoName).then(async res => {
      return res.description
    }).catch((err) => {
      console.log('Unable to get repository description', err)
    })

    var newContent = res.toString().replace('[INSERT REPONAME]', repoName)
      .replace('[INSERT GITHUB DESCRIPTION]', description)

    await mkdirp(getDirName(dest)).then(async () => {
      fs.writeFile(dest, newContent, 'utf8')
        .catch((err) => console.log('Error writing file:', err))
        .then(() => console.log(`Done! Created file ${dest}.`))
    }).catch(err => {
      console.log('Unable to creat directory for path.', err)
    })
  }).catch(error => {
    console.log('Error getting file:', error)
  })
}
