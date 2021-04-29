import {readFile, writeFile} from 'fs/promises';
import {join} from 'path';
import * as disassemblers from './disassemblers';

export const DisassemblePackage =
  async (path: string = process.cwd(), {space = 2}: Option) => {
    const json = JSON.parse(await readFile(join(path, 'package.json'), {encoding: 'utf8'}));

    await Promise.all(exec([path, json, {space}], Object.values(disassemblers as { [key: string]: DisassemblerFunc })));

    await writeFile(join(path, 'package.json'), JSON.stringify(json, undefined, space));
  };

const exec = (args: Parameters<DisassemblerFunc>, funcs: DisassemblerFunc[]) => funcs
  .filter((func) => func instanceof Function)
  .map((func) => func(...args));
