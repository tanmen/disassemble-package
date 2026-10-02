export type Option = {
  space: number;
};

export type DisassemblerFunc = (path: string, json: any, option: Option) => Promise<void>;
