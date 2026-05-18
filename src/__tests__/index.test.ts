import {jest} from '@jest/globals';
import {readdirSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {packageJson} from '../__fixtures__/packageJson.js';

const writeFile = jest.fn(() => Promise.resolve());
const readFile = jest.fn(() => Promise.resolve(JSON.stringify(packageJson)));

jest.unstable_mockModule('node:fs/promises', () => ({writeFile, readFile}));
jest.unstable_mockModule('fs/promises', () => ({writeFile, readFile}));

const {DisassemblePackage} = await import('../index.js');

const __dirname = dirname(fileURLToPath(import.meta.url));

describe('nominal', () => {
  it('should be run', async () => {
    await DisassemblePackage('test', {space: 5});

    const disassemblersCount = readdirSync(join(__dirname, '../disassemblers'), {withFileTypes: true})
      .filter((file) => file.isFile() && !file.name.startsWith('index'))
      .length;
    const packageJsonCount = 1;
    expect(writeFile).toHaveBeenCalledTimes(disassemblersCount + packageJsonCount);
  });
});
