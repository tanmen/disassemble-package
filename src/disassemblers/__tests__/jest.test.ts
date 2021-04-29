import {writeFile} from 'fs/promises';
import packageJson from '../../../test/package.json';
import {disassembleJest} from '../jest';

jest.mock('fs/promises');

describe('nominal', () => {
  it('should be write file', async () => {
    const json = {...packageJson};
    const space = 0;

    await disassembleJest('path', json, {space});

    expect(json).not.toHaveProperty('jest');
    expect(writeFile).toBeCalledWith('path/jest.config.json',
      JSON.stringify(packageJson.jest, undefined, space));
  });
  it('should be skip', async () => {
    await disassembleJest('path', {}, {space: 0});

    expect(writeFile).not.toBeCalled();
  });
});
