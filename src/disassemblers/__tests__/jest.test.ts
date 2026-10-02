import {jest} from '@jest/globals';
import {join} from 'path';
import {packageJson} from '../../__fixtures__/packageJson.js';

const writeFile = jest.fn(() => Promise.resolve());

jest.unstable_mockModule('node:fs/promises', () => ({writeFile}));
jest.unstable_mockModule('fs/promises', () => ({writeFile}));

const {disassembleJest} = await import('../jest.js');

describe('nominal', () => {
  it('should be write file', async () => {
    const json = {...packageJson};
    const space = 0;

    await disassembleJest('path', json, {space});

    expect(json).not.toHaveProperty('jest');
    expect(writeFile).toHaveBeenCalledWith(join('path', 'jest.config.json'),
      JSON.stringify(packageJson.jest, undefined, space));
  });
  it('should be skip', async () => {
    await disassembleJest('path', {}, {space: 0});

    expect(writeFile).not.toHaveBeenCalled();
  });
});
