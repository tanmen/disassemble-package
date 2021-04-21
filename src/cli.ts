#!/usr/bin/env node
const {DisassemblePackage} = require("./index");
const commandLineArgs = require("command-line-args");
const spinner = require('loading-spinner')

const mainDefinitions = [
  {name: 'path', type: String, defaultOption: true}
]
const optionDefinitions = [
  {name: 'space', alias: 's', type: Number}
]
const mainOption = commandLineArgs(mainDefinitions, {stopAtFirstUnknown: true})
const option = {...mainOption, ...commandLineArgs(optionDefinitions, {argv: mainOption._unknown || []})}

spinner.start(100, {
  clearChar: true
})

DisassemblePackage(option.path, {space: option.space})
  .then(() => spinner.stop())
