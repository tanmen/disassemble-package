import {jest} from '@jest/globals';
import {packageJson} from '../../__fixtures__/packageJson.js';

const writeFile = jest.fn(() => Promise.resolve());

jest.unstable_mockModule('node:fs/promises', () => ({writeFile}));
jest.unstable_mockModule('fs/promises', () => ({writeFile}));

const {disassembleCommitlint} = await import('../commitlint.js');

describe('nominal', () => {
  it('should be write file', async () => {
    const json = {...packageJson};
    const space = 0;

    await disassembleCommitlint('path', json, {space});

    expect(json).not.toHaveProperty('commitlint');
    expect(writeFile)
      .toHaveBeenCalledWith('path/.commitlintrc.json', JSON.stringify(packageJson.commitlint, undefined, space));
  });
  it('should be skip', async () => {
    await disassembleCommitlint('path', {}, {space: 0});

    expect(writeFile).not.toHaveBeenCalled();
  });
});
