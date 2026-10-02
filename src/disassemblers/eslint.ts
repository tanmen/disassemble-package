import {writeFile} from 'fs/promises';
import {join} from 'path';
import type {DisassemblerFunc, Option} from '../types.js';

export const disassembleEslint: DisassemblerFunc = async (path: string, json: any, {space}: Option) => {
  if (Object.hasOwn(json, 'eslintConfig')) {
    await writeFile(join(path, '.eslintrc'), JSON.stringify(json.eslintConfig, undefined, space));
    delete json.eslintConfig;
  }
};
