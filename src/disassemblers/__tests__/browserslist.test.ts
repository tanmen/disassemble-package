import {writeFile} from "fs/promises";
import packageJson from '../../../test/package.json'
import {disassembleBrowserslist} from "../browserslist";

jest.mock('fs/promises')

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
    expect(writeFile).toBeCalledWith('path/.browserslistrc', result);
  });
});
