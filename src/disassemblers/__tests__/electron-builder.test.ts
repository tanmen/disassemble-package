import {writeFile} from 'fs/promises';
import packageJson from '../../../test/package.json';
import {disassembleElectronBuilder} from '../electron-builder';

jest.mock('fs/promises');

describe('nominal', () => {
  it('should be write file', async () => {
    const json = {...packageJson};
    const space = 0;

    await disassembleElectronBuilder('path', json, {space});

    expect(json).not.toHaveProperty('build');
    expect(writeFile).toBeCalledWith('path/electron-builder.json', JSON.stringify(packageJson.build, undefined, space));
  });
  it('should be skip', async () => {
    await disassembleElectronBuilder('path', {}, {space: 0});

    expect(writeFile).not.toBeCalled();
  });
});
