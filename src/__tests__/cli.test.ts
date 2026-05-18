import {jest} from '@jest/globals';

const DisassemblePackage = jest.fn(() => Promise.resolve());

jest.unstable_mockModule('../index.js', () => ({DisassemblePackage}));
jest.unstable_mockModule('../config.js', () => ({
  config: {name: 'disassemble-package', version: '0.0.0'},
}));

const _argv = [...process.argv];

describe('nominal', () => {
  afterEach(() => {
    process.argv = _argv;
    jest.resetModules();
  });

  it('should be run with option', async () => {
    const path = './test';
    process.argv = ['', '', path, '-s', '2'];

    await expect(import('../cli.js')).resolves.toBeDefined();

    expect(DisassemblePackage).toHaveBeenCalledWith(path, {space: 2});
  });
});
