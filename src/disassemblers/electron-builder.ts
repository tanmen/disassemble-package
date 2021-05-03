import {writeFile} from 'fs/promises';
import {join} from 'path';

export const disassembleElectronBuilder: DisassemblerFunc = async (path: string, json: any, {space}: Option) => {
  if (json.hasOwnProperty('build')) {
    await writeFile(join(path, 'electron-builder.json'), JSON.stringify(json.build, undefined, space));
    delete json.build;
  }
};
