#!/usr/bin/env node
const fn = require('./')

if (process.argv.length < 3 || !process.argv.every(val => val.match(/(--help|-h)/) === null)) {
  console.log('Usage: node ' + process.argv[1] + ' mntnr/audit-templates')
  console.log('Or:    audit-templates mntnr/audit-templates [destination: there/here.md] (if installed globally)')
  process.exit(1)
}

if (process.argv[0] === 'audit-templates') {
  fn(process.argv[1], process.arg[2])
} else {
  fn(process.argv[2], process.argv[3])
}
