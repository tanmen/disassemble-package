import {jest} from '@jest/globals';
import {packageJson} from '../../__fixtures__/packageJson.js';

const writeFile = jest.fn(() => Promise.resolve());

jest.unstable_mockModule('node:fs/promises', () => ({writeFile}));
jest.unstable_mockModule('fs/promises', () => ({writeFile}));

const {disassembleHusky} = await import('../husky.js');

describe('nominal', () => {
  it('should be write file', async () => {
    const json = {...packageJson};
    const space = 0;

    await disassembleHusky('path', json, {space});

    expect(json).not.toHaveProperty('husky');
    expect(writeFile).toHaveBeenCalledWith('path/.huskyrc.js',
      `module.exports = ${JSON.stringify(packageJson.husky, undefined, space)}`);
  });
  it('should be skip', async () => {
    await disassembleHusky('path', {}, {space: 0});

    expect(writeFile).not.toHaveBeenCalled();
  });
});
