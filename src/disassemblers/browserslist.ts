import {writeFile} from 'fs/promises';
import {join} from 'path';

export const disassembleBrowserslist: DisassemblerFunc = async (path: string, json: any) => {
  if (Object.hasOwn(json, 'browserslist')) {
    await writeFile(join(path, '.browserslistrc'), Object.entries<[string, string[]][]>(json.browserslist)
      .map(([key, values]) => [`[${key}]`, ...values]).flat().join('\n'));
    delete json.browserslist;
  }
};
