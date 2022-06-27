import { isComponentTest } from "./is-component-test";
import { isLocalRun } from "./is-local-run";

//@ts-ignore
require('dotenv').config();

//@ts-ignore
export const getEnvVariable = (envVariable: string, requiredForTests: 'e2e' | 'component' | 'all' = 'e2e'): string => {
    let envVar;
    try {
        envVar = process.env[envVariable];
    } catch (error) {
        console.error(error);
    }

    if (envVar && envVar !== '') {
        return envVar;
    } else {
        const msg = `Enviroment varable ${envVariable} is not Set up`;

        if (requiredForTests === 'all') {
            throw new Error(msg);
        } else if (isLocalRun() && requiredForTests === 'e2e' && !isComponentTest()) {
            throw new Error(msg);
        } else if (requiredForTests === 'component' && isComponentTest()) {
            throw new Error(msg);
        }
    }
};