import {writeFile} from "fs/promises";
import packageJson from '../../../test/package.json'
import {disassembleBabel} from "../babel";

jest.mock('fs/promises')

describe('nominal', () => {
  it('should be write file', async () => {
    const json = {...packageJson};
    const space = 0;

    await disassembleBabel('path', json, {space});

    expect(json).not.toHaveProperty('babel');
    expect(writeFile).toBeCalledWith('path/.babelrc', JSON.stringify(packageJson.babel, undefined, space));
  });
  it('should be skip', async () => {
    await disassembleBabel('path', {}, {space: 0});

    expect(writeFile).not.toBeCalled();
  });
});
