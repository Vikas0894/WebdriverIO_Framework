import { timeouts } from "../configs/timeouts-config";
import { browserWaitUntil } from "./browser/browser-wait-until";

export const switchToWebView = async (): Promise<void> => {
    let context: any;

    await browserWaitUntil(
        async () => {
            const contexts = await driver.getContexts();
            context = contexts.find(c => c.indexOf('springleaf.omf') > -1);

            return !!context;
        },
        timeouts.medium,
        'There is no webView context',
    );

    await driver.switchContext(context);
};