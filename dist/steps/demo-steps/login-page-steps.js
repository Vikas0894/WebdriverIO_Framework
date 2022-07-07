"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const demo_step_definition_1 = require("../../pages/application-related-page/demo-step-definition");
(0, cucumber_1.Given)(/^I am On login page$/, async () => {
    await (await demo_step_definition_1.loginpage.getEmailText()).setValue('trainee');
});
(0, cucumber_1.When)(/^I enter the valid user and password$/, async () => {
    await (await demo_step_definition_1.loginpage.getPasswordText()).setValue('trainee');
});
(0, cucumber_1.Then)(/^I click to the login button$/, async () => {
    await (await demo_step_definition_1.loginpage.getClickLoginBtn()).click();
});
//# sourceMappingURL=login-page-steps.js.map