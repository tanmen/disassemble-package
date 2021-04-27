import {writeFile} from "fs/promises";
import packageJson from '../../../test/package.json'
import {disassembleHusky} from "../husky";

jest.mock('fs/promises')

describe('nominal', () => {
  it('should be write file', async () => {
    const json = {...packageJson};
    const space = 0;

    await disassembleHusky('path', json, {space});

    expect(json).not.toHaveProperty('husky');
    expect(writeFile).toBeCalledWith('path/.huskyrc.js',
      `module.exports = ${JSON.stringify(packageJson.husky, undefined, space)}`);
  });
});
