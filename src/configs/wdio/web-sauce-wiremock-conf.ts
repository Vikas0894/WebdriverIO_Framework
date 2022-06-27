import config from "./base-conf";
import { WEB_CAPS } from "./caps/caps";
import { SAUCE_CONFIG, SAUCE_SERVICE_CONFIG, WIREMOCK_SERVICE_CONFIG } from "./services/services-config";

exports.config = {
    ...config,
    ...SAUCE_CONFIG,
    baseUrl: 'http://localhost:8001',
    capabilities: WEB_CAPS.SAUCE,
    services: [SAUCE_SERVICE_CONFIG, WIREMOCK_SERVICE_CONFIG],
};
