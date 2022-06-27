import { getCurrentEnv } from "./enviroments-config";

const port = 3333;

export const WIREMOCK_CONFIG = {
    PORT: port,
    //BASE_URL: `http://${getCurrentEnv('WIREMOCK_HOST', 'component')}:${port}`,
};
