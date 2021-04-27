import packageJson from '../../../test/package.json';

export const writeFile = jest.fn(() => Promise.resolve());
export const readFile = jest.fn(() => Promise.resolve(JSON.stringify(packageJson)));
