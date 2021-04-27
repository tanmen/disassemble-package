# DisassemblePackage
[![npm](https://img.shields.io/npm/dw/disassemble-package)](https://www.npmjs.com/package/disassemble-package)
[![Test](https://github.com/tanmen/disassemble-package/actions/workflows/test.yml/badge.svg)](https://github.com/tanmen/disassemble-package/actions/workflows/test.yml)
[![CodeQL](https://github.com/tanmen/disassemble-package/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/tanmen/disassemble-package/actions/workflows/codeql-analysis.yml)
[![codecov](https://codecov.io/gh/tanmen/disassemble-package/branch/main/graph/badge.svg?token=74J9RU20ZA)](https://codecov.io/gh/tanmen/disassemble-package)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Decomposes `config files` contained in `package.json` and converts it into separate `config files`.

## Usage
`shell`
```shell
npx disassemble-package
```

---

`node`
```node
DisassemblePackage(process.cwd(), {space: 2})
```

## Supported Libraries
- jest
- babel
- browserslist
- eslint
- husky

If you would like to use a different library, please specify your preference in the issue.

## Command Details
```shell
disassemble-package <path> [--space count]
```
| name  | short | type   | required | default                            | description                                      | 
| ----- | ----- | ------ | -------- | ---------------------------------- | ------------------------------------------------ | 
| path  |       | string | false    | process.cmd() // current directory | Specifies location path where `package.json` is. | 
| space | s     | number | false    | 2                                  | Specify the indent when regenerating.            | 
## License
MIT License

## Contribute
Anyone welcome
