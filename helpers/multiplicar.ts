import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import colors from 'colors';

export const createFile = async (
  base: number = 5,
  list: boolean = false,
  until: number = 10,
): Promise<string> => {
  let output = '';
  let consoleOutput = '';

  for (let i = 1; i <= until; i += 1) {
    output += `Base ${i} * ${base} = ${base * i}\n`;
    consoleOutput += `Base ${i} ${colors.cyan('*')} ${base} ${colors.cyan('=')} ${base * i}\n`;
  }

  if (list) {
    const header = [
      colors.green('=================================='),
      colors.underline.white(`Tabla del: ${base.toString()}`),
      colors.green('=================================='),
    ].join('\n');
    console.log(`${colors.green(header)}\n${consoleOutput}`);
  }

  const outputDirectory = 'outputs';
  const fileName = join(outputDirectory, `table-${base}.txt`);

  await mkdir(outputDirectory, { recursive: true });
  await writeFile(fileName, output);

  return fileName;
};
