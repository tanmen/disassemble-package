import {writeFile} from 'fs/promises';
import packageJson from '../../../test/package.json';
import {disassembleCommitlint} from '../commitlint';

jest.mock('fs/promises');

describe('nominal', () => {
  it('should be write file', async () => {
    const json = {...packageJson};
    const space = 0;

    await disassembleCommitlint('path', json, {space});

    expect(json).not.toHaveProperty('commitlint');
    expect(writeFile)
      .toBeCalledWith('path/.commitlintrc.json', JSON.stringify(packageJson.commitlint, undefined, space));
  });
  it('should be skip', async () => {
    await disassembleCommitlint('path', {}, {space: 0});

    expect(writeFile).not.toBeCalled();
  });
});
