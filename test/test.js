const test = require('ava').test
const fn = require('../auditing.js')
const fs = require('mz/fs')
const path = require('path')

test.after('cleanup', t => {
  fs.unlink(path.join(__dirname, 'fixtures/RES.md'))
  fs.unlink(path.join(__dirname, 'fixtures/test/RES.md'))
  fs.rmdir(path.join(__dirname, 'fixtures/test'))
})

test('throws if no repository provided', async t => {
  const error = await t.throws(fn())
  t.is(error.message, 'A GitHub repository directory must be provided! Format: probot/probot')
})

test('will create file', async t => {
  const dest = path.join(__dirname, 'fixtures/RES.md')
  await fn('mntnr/audit-templates', dest)
  await fs.readFile(path.join(__dirname, 'fixtures/audit-templates-audit.md'), 'utf8')
    .then(async (fixture) => {
      await fs.readFile(path.join(__dirname, 'fixtures/RES.md'), 'utf8')
        .then(newfile => {
          t.is(fixture, newfile)
        })
    })
})

test('will create directories as needed', async t => {
  const dest = path.join(__dirname, 'fixtures/test/RES.md')
  await fn('mntnr/audit-templates', dest)
  await fs.readFile(path.join(__dirname, 'fixtures/audit-templates-audit.md'), 'utf8')
    .then(async (fixture) => {
      await fs.readFile(path.join(__dirname, 'fixtures/test/RES.md'), 'utf8')
        .then(newfile => {
          t.is(fixture, newfile)
        })
    })
})
