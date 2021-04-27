#!/usr/bin/env node
import commandLineArgs from "command-line-args";
import ora from "ora";
import {DisassemblePackage} from "./index";

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
  .finally(() => spinner.stop())
