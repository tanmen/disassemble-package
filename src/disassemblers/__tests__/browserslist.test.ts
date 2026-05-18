import {jest} from '@jest/globals';
import {packageJson} from '../../__fixtures__/packageJson.js';

const writeFile = jest.fn(() => Promise.resolve());

jest.unstable_mockModule('node:fs/promises', () => ({writeFile}));
jest.unstable_mockModule('fs/promises', () => ({writeFile}));

const {disassembleBrowserslist} = await import('../browserslist.js');

const result = `[production]
>0.2%
not dead
not op_mini all
[development]
last 1 chrome version
last 1 firefox version
last 1 safari version`;

describe('nominal', () => {
  it('should be write file', async () => {
    const json = {...packageJson};
    const space = 0;

    await disassembleBrowserslist('path', json, {space});

    expect(json).not.toHaveProperty('browserslist');
    expect(writeFile).toHaveBeenCalledWith('path/.browserslistrc', result);
  });
  it('should be skip', async () => {
    await disassembleBrowserslist('path', {}, {space: 0});

    expect(writeFile).not.toHaveBeenCalled();
  });
});
