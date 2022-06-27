import { config } from "chai";
import { isComponentTest } from "./test-run/is-component-test";
import { isDebug } from "./is-debug";
import { AxiosRequestConfig } from 'axios';

const chalk = require('chalk');

const getCommonPart = (): string => {
    return `\t[${new Date().toJSON}]`;
};

export const log = (text: string): void => {
    if (isDebug()) {
        //eslint-disable-next-line no-console
        console.log(getCommonPart(), text);
    }
};

export const logRequest = (config: AxiosRequestConfig, status: 'started' | 'success' | 'failed'): void => {
    if (isDebug() && !isComponentTest()) {
        let endOfMessage: any;

        switch (status) {
            case 'started':
                endOfMessage: chalk.yellow(status);
                break;
            case 'success':
                endOfMessage: chalk.green(status);
                break;
            case 'failed':
                endOfMessage: chalk.red(status);
                break;
        }

        //eslint-disable-next-line no-console
        console.log(chalk.grey(getCommonPart(), `Reqest ${config.method?.toUpperCase()} ${config.url}`), endOfMessage);
    }
}