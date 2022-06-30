import { getMobileCaps } from '../../support/test-run/get-mobile-caps';
import  config  from './base-conf';
import { APPIUM_LOCAL_CONFIG } from "./services/services-config";

exports.config = {
    ...config,
    ...APPIUM_LOCAL_CONFIG,
    capabilities: getMobileCaps(),
    services: [APPIUM_LOCAL_CONFIG],
};