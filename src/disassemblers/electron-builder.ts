import {writeFile} from 'fs/promises';
import {join} from 'path';
import type {DisassemblerFunc, Option} from '../types.js';

export const disassembleElectronBuilder: DisassemblerFunc = async (path: string, json: any, {space}: Option) => {
  if (Object.hasOwn(json, 'build')) {
    await writeFile(join(path, 'electron-builder.json'), JSON.stringify(json.build, undefined, space));
    delete json.build;
  }
};
