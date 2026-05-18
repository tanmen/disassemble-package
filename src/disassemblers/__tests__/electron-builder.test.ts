import {jest} from '@jest/globals';
import {packageJson} from '../../__fixtures__/packageJson.js';

const writeFile = jest.fn(() => Promise.resolve());

jest.unstable_mockModule('node:fs/promises', () => ({writeFile}));
jest.unstable_mockModule('fs/promises', () => ({writeFile}));

const {disassembleElectronBuilder} = await import('../electron-builder.js');

describe('nominal', () => {
  it('should be write file', async () => {
    const json = {...packageJson};
    const space = 0;

    await disassembleElectronBuilder('path', json, {space});

    expect(json).not.toHaveProperty('build');
    expect(writeFile)
      .toHaveBeenCalledWith('path/electron-builder.json', JSON.stringify(packageJson.build, undefined, space));
  });
  it('should be skip', async () => {
    await disassembleElectronBuilder('path', {}, {space: 0});

    expect(writeFile).not.toHaveBeenCalled();
  });
});
