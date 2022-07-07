"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const get_mobile_caps_1 = require("../../support/test-run/get-mobile-caps");
const services_config_1 = require("./services/services-config");
exports.config = {
    ...chai_1.config,
    ...services_config_1.SAUCE_CONFIG,
    capabilities: (0, get_mobile_caps_1.getMobileCaps)(),
    services: [services_config_1.SAUCE_SERVICE_CONFIG],
};
//# sourceMappingURL=mobile-sauce-conf.js.map