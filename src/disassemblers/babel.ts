import {writeFile} from 'fs/promises';
import {join} from 'path';

export const disassembleBabel: DisassemblerFunc = async (path: string, json: any, {space}: Option) => {
  if (json.hasOwnProperty('babel')) {
    await writeFile(join(path, '.babelrc'), JSON.stringify(json.babel, undefined, space));
    delete json.babel;
  }
};
