# DisassemblePackage
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
