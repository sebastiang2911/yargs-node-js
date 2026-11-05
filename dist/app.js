import { createFile } from "./helpers/multiplicar.js";
import { argv } from "./config/yargs.js";
import colors from 'colors';
const { base, list, until } = argv;
createFile(base, list, until)
    .then((fileName) => console.log(colors.rainbow(`File created: ${fileName}`)))
    .catch((error) => console.error(error));
