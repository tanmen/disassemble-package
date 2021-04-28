import {readdirSync} from "fs";
import {writeFile} from "fs/promises";
import {join} from "path";
import {DisassemblePackage} from "../index";

jest.mock('fs/promises')

describe('nominal', () => {
  it('should be run', async () => {
    await DisassemblePackage('test', {space: 5})

    const disassemblersCount = readdirSync(join(__dirname, '../disassemblers'), {withFileTypes: true})
      .filter(file => file.isFile() && !file.name.startsWith('index'))
      .length
    const packageJsonCount = 1
    expect(writeFile).toBeCalledTimes(disassemblersCount + packageJsonCount)
  });
});
