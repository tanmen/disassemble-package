import {readFile, writeFile} from 'fs/promises'
import {join} from 'path'
import {
  disassembleBabel,
  disassembleBrowserslist,
  disassembleEslint,
  disassembleHusky,
  disassembleJest
} from "./disassemblers";

export const DisassemblePackage = async (path: string = process.cwd(), {space = 2}: Partial<Option>) => {
  const json = JSON.parse(await readFile(join(path, 'package.json'), {encoding: "utf8"}))

  await Promise.all(exec([path, json, {space}], [
    disassembleBabel,
    disassembleBrowserslist,
    disassembleEslint,
    disassembleHusky,
    disassembleJest
  ]))

  await writeFile(join(path, 'package.json'), JSON.stringify(json, undefined, space))
}

const exec = (args: Parameters<DisassemblerFunc>, funcs: DisassemblerFunc[]) => funcs.map(func => func(...args))
