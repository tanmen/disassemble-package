import {writeFile} from "fs/promises";
import packageJson from '../../../test/package.json'
import {disassembleEslint} from "../eslint";

jest.mock('fs/promises')

describe('nominal', () => {
  it('should be write file', async () => {
    const json = {...packageJson};
    const space = 0;

    await disassembleEslint('path', json, {space});

    expect(json).not.toHaveProperty('eslintConfig');
    expect(writeFile)
      .toBeCalledWith('path/.eslintrc', JSON.stringify(packageJson.eslintConfig, undefined, space));
  });
});
