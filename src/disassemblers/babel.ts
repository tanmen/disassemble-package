import {writeFile} from 'fs/promises';
import {join} from 'path';
import type {DisassemblerFunc, Option} from '../types.js';

export const disassembleBabel: DisassemblerFunc = async (path: string, json: any, {space}: Option) => {
  if (Object.hasOwn(json, 'babel')) {
    await writeFile(join(path, '.babelrc'), JSON.stringify(json.babel, undefined, space));
    delete json.babel;
  }
};
