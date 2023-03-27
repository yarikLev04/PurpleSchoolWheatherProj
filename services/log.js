import chalk from 'chalk'
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(chalk.red(' Error ') + ' ' + error);
}

const printSuccess = (msg) => {
	console.log(chalk.green(' SUCCESS ') + ' ' + msg);
}

const printHelp = () => {
	console.log(
		dedent`${chalk.bgBlackBright(' HELP ')}
		Без параметров - вывод погоды
		-s [CITY] для установки
		-h для вывода помощи
		-t [API_KEY] для сохранения токена
		`
	);
}

export { printError, printSuccess, printHelp }
