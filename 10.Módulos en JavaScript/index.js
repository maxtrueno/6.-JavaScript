import chalk from 'chalk';

import { sumar, multiplicar } from './controller.js';


const resultado = multiplicar(sumar(1,2), sumar(4,5))
console.log(chalk.blue(resultado));
console.log(chalk.green(resultado));