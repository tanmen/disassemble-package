import {writeFile} from 'fs/promises';
import {join} from 'path';
import type {DisassemblerFunc, Option} from '../types.js';

export const disassembleSemanticRelease: DisassemblerFunc = async (path: string, json: any, {space}: Option) => {
  if (Object.hasOwn(json, 'release')) {
    await writeFile(join(path, '.releaserc'), JSON.stringify(json.release, undefined, space));
    delete json.release;
  }
};
