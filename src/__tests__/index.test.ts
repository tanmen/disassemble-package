import {writeFile} from "fs/promises";
import * as disassemblers from '../disassemblers'
import {DisassemblePackage} from "../index";

jest.mock('fs/promises')

describe('nominal', () => {
  it('should be run', async () => {
    await DisassemblePackage('test', {space: 5})

    const disassemblersCount = Object.keys(disassemblers).length
    const packageJsonCount = 1
    expect(writeFile).toBeCalledTimes(disassemblersCount + packageJsonCount)
  });
});
