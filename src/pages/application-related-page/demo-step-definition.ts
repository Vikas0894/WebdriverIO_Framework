import { ButtonControl } from "../../base-controls/button-control";
import { ElementControl } from "../../base-controls/element-control";
import { InputControl } from "../../base-controls/input-control";
import { timeouts } from "../../configs/timeouts-config";
import { getElement, getElementById } from "../../support/get-element-by-id";

 class LoginPage{
    public async getEmailText(): Promise<InputControl> {

        return new InputControl(await getElement('name="username"'));
    }

    public async getPasswordText(): Promise<InputControl> {
        return new InputControl(await getElement('name="pwd"'));
    }

    public async getClickLoginBtn(): Promise<ButtonControl> {
        return new ButtonControl(await getElementById('loginButton'));
    }

    public async getLogoutLink(): Promise<ElementControl>{
        return new ElementControl(await getElementById('logoutLink'));
    }

    /**
     * Logic
     */

    public async waitForPage(): Promise<void> {
        await (await this.getLogoutLink()).waitForDisplayed(timeouts.small,'Link is not Displayed');
    }
}

export const loginpage = new LoginPage();
