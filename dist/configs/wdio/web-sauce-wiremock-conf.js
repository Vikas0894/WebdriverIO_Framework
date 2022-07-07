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
    ...services_config_1.SAUCE_CONFIG,
    baseUrl: 'http://localhost:8001',
    capabilities: caps_1.WEB_CAPS.SAUCE,
    services: [services_config_1.SAUCE_SERVICE_CONFIG, services_config_1.WIREMOCK_SERVICE_CONFIG],
};
//# sourceMappingURL=web-sauce-wiremock-conf.js.map