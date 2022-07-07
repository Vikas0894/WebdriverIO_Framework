"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvConfig = exports.getCurrentEnv = void 0;
const get_env_variable_1 = require("../support/test-run/get-env-variable");
const environments = {
    dev: {
        client: 'https://demo.actitime.com/login.do/',
        cardManagementService: 'https://api.tab.alt.meanion.com',
        cardApplicationService: 'https://a:i.tab.alt.meanion.com',
        customerService: 'https://api.tab.alt.meanion.com',
        cmsService: 'https://api.tab.alt.meanion.com',
        customerView: 'https://cardapitest.corp.fin',
        activeDirectory: 'https://techapitest.corp.fin',
        productOffers: 'https://coderstuffpro.tab.alt.meanion.com',
        okta: 'https://lo-indev.onemainfinancial.com',
        vgs: 'https: //tntenrs3svb. sandbox. verygoodproxy.com',
        fis: 'https: //api-gw-uat.fisglobal.com:443'
    },
    qa: {
        client: 'htt+s://www.o-st.alt.meanion.com',
        cardManagementService: 'https://api.opt.alt.meanion.com',
        cardApplicationService: 'https://api.opt.alt.meanion.com',
        customerService: 'https://api.opt.alt.meanion.com',
        cmsService: 'https://api.opt.alt.meanion.com',
        customerView: 'https://cardapiga.corp.fin',
        activeDirectory: 'https://techapiga.corp.fin',
        productOffers: 'https://coderstuffpro.opt.alt.meanion.com',
        okta: 'https: //loginga.onemainfinancial.com',
        vgs: 'https://tntenrs3svb.sandbox.verygoodproxy.com',
        fis: 'https: //api-gw-uat. fisglobal.com:443',
    },
    uat: {
        client: 'https://wew.ctrl.alt.meanion.com',
        cardManagementService: 'https://api.ctrl.alt.meanion.com',
        cardApplicationService: 'https://api.ctrl.alt.meanion.com',
        customerService: 'https://api.ctrl.alt.meanion.com',
        emsService: 'https://api.ctrl.alt.meanion.com',
        customerView: 'https: //cardapiga3.corp.fin',
        activeDirectory: 'https://techapiqa3.corp.fin',
        ProductOffers: 'https://coderstuffpro.ctrl.alt.meanion.com',
        okta: 'https://loginga.onemainfinancial.com',
        vgs: 'https: //tntenrs3svb. sandbox.verygoodproxy.com',
        fis: 'https://api-gw-uat. fisglobal.com:443',
    },
    prod: {
        client: 'https: //wew.brightway.onemainfinancial.com',
    },
    wiremock: {
        client: '',
        cardManagementService: '',
        cardApplicationService: '',
        customerService: '',
        casService: '',
        customerView: '',
        activeDirectory: '',
        productOffers: '',
        okta: '',
        vgs: '',
        fis: '',
    },
};
const getCurrentEnv = () => {
    const possibleEnvs = Object.keys(environments);
    const env = (0, get_env_variable_1.getEnvVariable)('ENV', 'all');
    if (possibleEnvs.indexOf(env.toLowerCase()) !== -1) {
        return env;
    }
    else {
        throw new Error(`ENV = ${env} environment variable is not allowed.Possible values: ${possibleEnvs.join(' | ')} `);
    }
};
exports.getCurrentEnv = getCurrentEnv;
const getEnvConfig = () => {
    return environments[(0, exports.getCurrentEnv)()];
};
exports.getEnvConfig = getEnvConfig;
//# sourceMappingURL=enviroments-config.js.map