import { config } from "chai";
import { getMobileCaps } from "../../pages/support/test-run/get-mobile-caps";
import { SAUCE_CONFIG, SAUCE_SERVICE_CONFIG } from "./services/services-config";

exports.config = {
    ...config,
    ...SAUCE_CONFIG,
    capabilities: getMobileCaps(),
    services: [SAUCE_SERVICE_CONFIG],
};
