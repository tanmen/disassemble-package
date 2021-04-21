# DisassemblePackage
![npm](https://img.shields.io/npm/dw/disassemble-package)
[![Build](https://github.com/tanmen/disassemble-package/actions/workflows/build.yml/badge.svg)](https://github.com/tanmen/disassemble-package/actions/workflows/build.yml)
[![CodeQL](https://github.com/tanmen/disassemble-package/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/tanmen/disassemble-package/actions/workflows/codeql-analysis.yml)

Decomposes `config files` contained in `package.json` and converts it into separate `config files`.

## Usage
```shell
npx disassembler-package
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
disassembler-package <path> [--space count]
```
| name  | short | type   | required | default                            | description                                      | 
| ----- | ----- | ------ | -------- | ---------------------------------- | ------------------------------------------------ | 
| path  |       | string | false    | process.cmd() // current directory | Specifies location path where `package.json` is. | 
| space | s     | number | false    | 2                                  | Specify the indent when regenerating.            | 
## License
MIT License

## Contribute
Anyone welcome
