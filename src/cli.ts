#!/usr/bin/env node
import {DisassemblePackage} from "./index";
import commandLineArgs from "command-line-args";
import ora from "ora";

const mainDefinitions = [
  {name: 'path', type: String, defaultOption: true}
]
const optionDefinitions = [
  {name: 'space', alias: 's', type: Number}
]
const mainOption = commandLineArgs(mainDefinitions, {stopAtFirstUnknown: true})
const option = {...mainOption, ...commandLineArgs(optionDefinitions, {argv: mainOption._unknown || []})}

const spinner = ora('Disassembling');

spinner.start()
DisassemblePackage(option.path, {space: option.space})
  .then(() => spinner.stop())
