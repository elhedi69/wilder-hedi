import "dotenv/config";
import chalk from 'chalk';

console.log(chalk.green(process.env.NAME));
console.log(chalk.yellow(process.env.NAME2));
console.log(chalk.blue(process.env.NAME3));
console.log(chalk.red(process.env.NAME4));
