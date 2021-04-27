import {DisassemblePackage} from "../index";

jest.mock('fs/promises')
jest.mock('../disassemblers')

describe('nominal', () => {
  it('should be run', async () => {

    await DisassemblePackage('test', {space: 5})
  });
});
