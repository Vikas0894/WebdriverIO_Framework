import config from "./base-conf";
import { WEB_CAPS } from "./caps/caps";
import { CHROMEDRIVER_SERVICE_CONFIG, WIREMOCK_SERVICE_CONFIG } from "./services/services-config";

exports.config = {
    ...config,
    baseUrl: 'http://localhost:8100',
    runner: 'local',
    capabilities: WEB_CAPS.LOCAL,
    Services: [CHROMEDRIVER_SERVICE_CONFIG, WIREMOCK_SERVICE_CONFIG],
}