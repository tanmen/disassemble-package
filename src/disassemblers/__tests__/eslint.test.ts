import {jest} from '@jest/globals';
import {packageJson} from '../../__fixtures__/packageJson.js';

const writeFile = jest.fn(() => Promise.resolve());

jest.unstable_mockModule('node:fs/promises', () => ({writeFile}));
jest.unstable_mockModule('fs/promises', () => ({writeFile}));

const {disassembleEslint} = await import('../eslint.js');

describe('nominal', () => {
  it('should be write file', async () => {
    const json = {...packageJson};
    const space = 0;

    await disassembleEslint('path', json, {space});

    expect(json).not.toHaveProperty('eslintConfig');
    expect(writeFile)
      .toHaveBeenCalledWith('path/.eslintrc', JSON.stringify(packageJson.eslintConfig, undefined, space));
  });
  it('should be skip', async () => {
    await disassembleEslint('path', {}, {space: 0});

    expect(writeFile).not.toHaveBeenCalled();
  });
});
