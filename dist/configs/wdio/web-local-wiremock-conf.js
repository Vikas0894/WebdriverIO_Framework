"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_conf_1 = __importDefault(require("./base-conf"));
const caps_1 = require("./caps/caps");
const services_config_1 = require("./services/services-config");
exports.config = {
    ...base_conf_1.default,
    baseUrl: 'http://localhost:8100',
    runner: 'local',
    capabilities: caps_1.WEB_CAPS.LOCAL,
    Services: [services_config_1.CHROMEDRIVER_SERVICE_CONFIG, services_config_1.WIREMOCK_SERVICE_CONFIG],
};
//# sourceMappingURL=web-local-wiremock-conf.js.map