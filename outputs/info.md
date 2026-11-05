# Multiplication Table Generator

A TypeScript command-line application that generates multiplication tables and saves them as text files. It uses Yargs to process command-line options and Colors to format console output.

## Usage

```bash
yarn dev --base=5 --list --until=10
```

## Options

- `--base`, `-b`: Number to multiply. Required.
- `--list`, `-l`: Displays the table in the console. Default: `false`.
- `--until`, `-u`: Last multiplier in the table. Default: `10`.

Generated files are saved as `table-<base>.txt`.
