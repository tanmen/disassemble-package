import {writeFile} from "fs/promises";
import {join} from "path";

export const disassembleSemanticRelease: DisassemblerFunc = async (path: string, json: any, {space}: Option) => {
  if (json.hasOwnProperty('release')) {
    await writeFile(join(path, '.releaserc'), JSON.stringify(json.release, undefined, space))
    delete json.release
  }
}
