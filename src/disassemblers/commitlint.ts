import {writeFile} from "fs/promises";
import {join} from "path";

export const disassembleCommitlint: DisassemblerFunc = async (path: string, json: any, {space}: Option) => {
  if (json.hasOwnProperty('commitlint')) {
    await writeFile(join(path, '.commitlintrc.json'), JSON.stringify(json.commitlint, undefined, space))
    delete json.commitlint
  }
}
