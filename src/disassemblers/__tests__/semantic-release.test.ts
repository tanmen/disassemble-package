import {writeFile} from 'fs/promises';
import packageJson from '../../../test/package.json';
import {disassembleSemanticRelease} from '../semantic-release';

jest.mock('fs/promises');

describe('nominal', () => {
  it('should be write file', async () => {
    const json = {...packageJson};
    const space = 0;

    await disassembleSemanticRelease('path', json, {space});

    expect(json).not.toHaveProperty('release');
    expect(writeFile).toBeCalledWith('path/.releaserc',
      JSON.stringify(packageJson.release, undefined, space));
  });
  it('should be skip', async () => {
    await disassembleSemanticRelease('path', {}, {space: 0});

    expect(writeFile).not.toBeCalled();
  });
});
