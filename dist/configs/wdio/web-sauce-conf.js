"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enviroments_config_1 = require("../enviroments-config");
const base_conf_1 = __importDefault(require("./base-conf"));
const caps_1 = require("./caps/caps");
const services_config_1 = require("./services/services-config");
exports.config = {
    ...base_conf_1.default,
    ...services_config_1.SAUCE_CONFIG,
    baseUrl: (0, enviroments_config_1.getEnvConfig)().client,
    capabilities: caps_1.WEB_CAPS.SAUCE,
    Services: [services_config_1.SAUCE_SERVICE_CONFIG],
};
//# sourceMappingURL=web-sauce-conf.js.map