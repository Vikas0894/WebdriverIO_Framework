import { getMobileCaps } from "../../support/test-run/get-mobile-caps";
import config from "./base-conf";
import { SAUCE_CONFIG, SAUCE_SERVICE_CONFIG, WIREMOCK_SERVICE_CONFIG } from "./services/services-config";

exports.config = {
    ...config,
    ...SAUCE_CONFIG,
    capabilities: getMobileCaps(),
    services: [SAUCE_SERVICE_CONFIG, WIREMOCK_SERVICE_CONFIG],
};