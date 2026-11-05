import { createFile } from './helpers/multiplicar.ts';
import { argv } from './config/yargs.ts';
import colors from 'colors';

const { base, list, until } = argv;

createFile(base, list, until)
  .then((fileName: string) =>
    console.log(colors.rainbow(`File created: ${fileName}`)),
  )
  .catch((error: unknown) => console.error(error));
