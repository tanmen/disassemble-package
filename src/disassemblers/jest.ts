import {writeFile} from 'fs/promises';
import {join} from 'path';
import type {DisassemblerFunc, Option} from '../types.js';

export const disassembleJest: DisassemblerFunc = async (path: string, json: any, {space}: Option) => {
  if (Object.hasOwn(json, 'jest')) {
    await writeFile(join(path, 'jest.config.json'), JSON.stringify(json.jest, undefined, space));
    delete json.jest;
  }
};
