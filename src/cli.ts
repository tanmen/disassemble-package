#!/usr/bin/env node
import chalk from "chalk";
import commandLineArgs from "command-line-args";
import ora from "ora";
import {DisassemblePackage} from "./index";
import packegeJson from "../package.json";

console.log(`${chalk.white('»')} ${chalk.gray(chalk`${packegeJson.name} {white v${packegeJson.version}}`)}`)

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
  .finally(() => {
    spinner.stop()
    console.log(`${chalk.green('✔')} ${chalk.white('disassembled')}`)
  })
