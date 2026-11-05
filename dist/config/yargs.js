import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
export const argv = yargs(hideBin(process.argv))
    .option('base', {
    alias: 'b',
    type: 'number',
    demandOption: true,
    describe: 'Base to multiply',
})
    .option('list', {
    alias: 'l',
    type: 'boolean',
    default: false,
    describe: 'Show the multiplication table in the console',
})
    .option('until', {
    alias: 'u',
    type: 'number',
    default: 10,
    describe: 'Number until which to multiply',
})
    .check((argv) => {
    if (Number.isNaN(argv.base)) {
        throw new Error('The base must be a number');
    }
    return true;
})
    .parseSync();
