import { getMobileCaps } from "../../support/test-run/get-mobile-caps";
import config  from "./base-conf";
import { APPIUM_LOCAL_CONFIG, APPIUM_SERVICE_CONFIG, WIREMOCK_SERVICE_CONFIG } from "./services/services-config";

exports.config = {
    ...config,
    ...APPIUM_LOCAL_CONFIG,
    capabilities: getMobileCaps(),
    services: [APPIUM_SERVICE_CONFIG, WIREMOCK_SERVICE_CONFIG],
};
