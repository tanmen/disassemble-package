# DisassemblePackage
Decomposes `config files` contained in `package.json` and converts it into separate `config files`.

## Usage
```shell
npx disassembler-package
```

## CommandDetails
```shell
disassembler-package <path> [--space count]
```
| name  | type   | required | default                            | description                                      | 
| ----- | ------ | -------- | ---------------------------------- | ------------------------------------------------ | 
| path  | string | false    | process.cmd() // current directory | Specifies location path where `package.json` is. | 
| space | number | false    | 2                                  | Specify the indent when regenerating.            | 

## License
MIT License

## Contribute
Anyone welcome
