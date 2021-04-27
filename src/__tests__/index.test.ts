import {
  disassembleBabel,
  disassembleBrowserslist,
  disassembleEslint,
  disassembleHusky,
  disassembleJest, disassembleSemanticRelease
} from "../disassemblers";
import {DisassemblePackage} from "../index";

jest.mock('fs/promises')
jest.mock('../disassemblers')

describe('nominal', () => {
  it('should be run', async () => {
    await DisassemblePackage('test', {space: 5})

    expect(disassembleBabel).toBeCalled()
    expect(disassembleBrowserslist).toBeCalled()
    expect(disassembleEslint).toBeCalled()
    expect(disassembleHusky).toBeCalled()
    expect(disassembleJest).toBeCalled()
    expect(disassembleSemanticRelease).toBeCalled()
  });
});
