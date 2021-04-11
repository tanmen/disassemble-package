import {writeFile} from "fs/promises";
import {join} from "path";

export const disassembleEslint: DisassemblerFunc = async (path: string, json: any, {space}: Option) => {
  if (json.hasOwnProperty('eslintConfig')) {
    await writeFile(join(path, '.eslintrc'), JSON.stringify(json.eslintConfig, undefined, space))
    delete json.eslintConfig
  }
}
