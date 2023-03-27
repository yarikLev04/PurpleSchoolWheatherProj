#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { printError, printHelp, printSuccess } from './services/log.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.js';
import { getWeather } from './services/api.js';

const saveToken = async (token) => {
	if (!token.length) {
		printError('Не передан токен')
		return
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token)
		printSuccess('Токен сохранен')
	} catch (e) {
		printError(e.message)
	}
}

const initCLI = () => {
	const args = getArgs(process.argv);
	if (args.h) {
		printHelp();
	}
	if (args.s) {

	}
	if (args.t) {
		return saveToken(args.t)
	}
	getWeather('London')
};

initCLI();
