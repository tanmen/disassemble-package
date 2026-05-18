import {jest} from '@jest/globals';
import {packageJson} from '../../__fixtures__/packageJson.js';

const writeFile = jest.fn(() => Promise.resolve());

jest.unstable_mockModule('node:fs/promises', () => ({writeFile}));
jest.unstable_mockModule('fs/promises', () => ({writeFile}));

const {disassembleSemanticRelease} = await import('../semantic-release.js');

describe('nominal', () => {
  it('should be write file', async () => {
    const json = {...packageJson};
    const space = 0;

    await disassembleSemanticRelease('path', json, {space});

    expect(json).not.toHaveProperty('release');
    expect(writeFile).toHaveBeenCalledWith('path/.releaserc',
      JSON.stringify(packageJson.release, undefined, space));
  });
  it('should be skip', async () => {
    await disassembleSemanticRelease('path', {}, {space: 0});

    expect(writeFile).not.toHaveBeenCalled();
  });
});
