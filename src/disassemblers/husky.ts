import {writeFile} from 'fs/promises';
import {join} from 'path';

const template = (json: string) => `module.exports = ${json}`;

export const disassembleHusky: DisassemblerFunc = async (path: string, json: any, {space}: Option) => {
  if (Object.hasOwn(json, 'husky')) {
    await writeFile(join(path, '.huskyrc.js'), template(JSON.stringify(json.husky, undefined, space)));
    delete json.husky;
  }
};
