#!/usr/bin/env node
//Command line interface to Graphiy.CMS'

var argv = require('minimist')(process.argv.slice(2))
, _ = require('lodash')
, app = new require('./app')

if (!argv._[0] || argv._[0] === 'server') {
  require('../server/index.js')
} else 
//./graphiy convert path-to-source path-to-target --source="module-name" --target="module-name"
var defaults = {root: 'root'}

//TODO where to put 'convert' configs?
_.extend(defaults, {
  ignore: ['index']
, noTextParsing: true
})

if (argv._[0] === 'convert') {
  var p = {}
  _.extend(p, defaults, {
    source: argv._[1]
  , target: argv._[2]
  })
  var config = app.getRepoConfig(p)
  var sourceProvider = new app.providers[argv.source](config)
  var targetProvider = new app.providers[argv.target](config)
  sourceProvider.read().then(function (db) {
    targetProvider.write(db)
  })
}