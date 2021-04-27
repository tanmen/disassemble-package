import {DisassemblePackage} from "../index";

jest.mock('../index.ts')
const _argv = [...process.argv]

describe('nominal', () => {
  afterEach(() => {
    process.argv = _argv
  })

  it('should be run', () => {
    const path = './test';
    process.argv = ["","", path]

    require('../cli')

    expect(DisassemblePackage).toBeCalledWith(path, {space: undefined})
  });

  it('should be run with option', () => {
    const path = './test';
    process.argv = ["","", path, "-s", "2"]

    require('../cli')

    expect(DisassemblePackage).toBeCalledWith(path, {space: 2})

    process.argv = ["","", path, "--space", "99"]

    require('../cli')

    expect(DisassemblePackage).toBeCalledWith(path, {space: 99})
  });

  it('should be run with non option', () => {
    process.argv = ["",""]

    require('../cli')

    expect(DisassemblePackage).toBeCalledWith(undefined, {space: undefined})
  });
});
