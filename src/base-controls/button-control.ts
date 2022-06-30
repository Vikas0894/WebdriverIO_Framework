import { ClickOptions } from "webdriverio";
import { timeouts } from "../configs/timeouts-config";
import { assertTrue } from "../support/assert/assert-true";
import { browserWaitUntil } from "../support/browser/browser-wait-until";
import { ElementControl } from "./element-control";

export class ButtonControl extends ElementControl {
    public async click(clickOptions?: ClickOptions | undefined): Promise<void> {
        await this.waitForEnabled(timeouts.large, 'Button is not enabled');
        await super.click(clickOptions);
    }

    public async isEnabled(): Promise<boolean> {
        return (
            (!(await this.getAttribute('ng-reflect-disabled')) ||
                (await this.getAttribute('ng-reflect-disabled')) === 'false') &&
            !(await this.getAttribute('disabled'))
        );
    }

    public async waitForEnabled(timeout: number, timeoutMsg: string): Promise<void> {
        await browserWaitUntil(async () => this.isEnabled(), timeout, timeoutMsg);
    }

    public async isDisabled(): Promise<boolean> {
        return (await this.getAttribute('ng-reflect-disabled')) == 'true' || !!(await this.getAttribute('disabled'));
    }

    public async waitForDisabled(timeout: number, timeoutMsg: string): Promise<void> {
        await browserWaitUntil(async () => this.isDisabled(), timeout, timeoutMsg);
    }

    public async expectedToDisabled(message: string): Promise<void> {
        assertTrue(await this.isDisabled(), message);
    }
}