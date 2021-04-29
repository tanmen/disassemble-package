import {DisassemblePackage} from '../index';

jest.mock('../index');
jest.mock('../config');
const _argv = [...process.argv];

describe('nominal', () => {
  afterEach(() => {
    process.argv = _argv;
  });

  it('should be run with option', () => {
    const path = './test';
    process.argv = ['', '', path, '-s', '2'];

    expect(() => require('../cli')).not.toThrow();

    expect(DisassemblePackage).toBeCalledWith(path, {space: 2});
  });
});
