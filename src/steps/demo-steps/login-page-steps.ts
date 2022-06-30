import { When,Given,Then } from "@cucumber/cucumber";
import { loginpage } from "../../pages/application-related-page/demo-step-definition";

Given(/^I am On login page$/, async () => {
    await(await loginpage.getEmailText()).setValue('trainee');
});

When(/^I enter the valid user and password$/, async() => {
    await(await loginpage.getPasswordText()).setValue('trainee');
});

Then(/^I click to the login button$/, async() => {
    await(await loginpage.getClickLoginBtn()).click();
});