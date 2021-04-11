import {writeFile} from "fs/promises";
import {join} from "path";

export const disassembleJest: DisassemblerFunc = async (path: string, json: any, {space}: Option) => {
  if (json.hasOwnProperty('jest')) {
    await writeFile(join(path, 'jest.config.json'), JSON.stringify(json.jest, undefined, space))
    delete json.jest
  }
}
