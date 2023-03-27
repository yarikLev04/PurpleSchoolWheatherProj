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

const printWeather = (res, icon) => {
	console.log(
		dedent`${chalk.yellow(' ПОГОДА В ГОРОДЕ ')} ${res.name}
		${icon}${res.weather[0].description}
		Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
		Влажность: ${res.main.humidity}
		Скорость ветра: ${res.wind.speed}
		`
	);
}

export { printError, printSuccess, printHelp, printWeather }
