import { ClickOptions } from 'webdriverio';
import { timeouts } from '../configs/timeouts-config';
import { Location } from 'webdriverio/build/commands/element/getLocation';
import { Size } from 'webdriverio/build/commands/element/getSize';
import { browserWaitUntil } from '../pages/support/browser/browser-wait-until';
import { assertEqual } from '../pages/support/assert/assert-equal';


export class ElementControl {
    protected el: WebdriverIO.Element;

    constructor(el: WebdriverIO.Element) {
        this.el = el;
    }

    public async getParentElement(): Promise<WebdriverIO.Element> {
        return this.el.$('..');
    }

    /**
     * Actions
     */
    public async click(clickOptions?: ClickOptions): Promise<void> {
        await this.scrollIntoView();
        await this.WaitForClickable(timeouts.huge, `Element with selector: ${this.el.selector} is not clickable`);
        await this.el.click(clickOptions);
    }

    public async doubleClickCustom(clickOptions?: ClickOptions): Promise<void> {
        await this.scrollIntoView();
        await this.el.click(clickOptions);
        await this.el.click(clickOptions)
    }

    public async getText(trim: boolean = false): Promise<string> {
        await this.scrollIntoView();
        const text: string = await this.el.getText();

        return trim ? text.trim() : text;
    }

    public async getValue(): Promise<string> {
        return this.el.getValue();
    }

    public async getAttribute(attributeName: string): Promise<string> {
        return this.el.getAttribute(attributeName);
    }

    public async getScrollIntoView(): Promise<void> {
        if (!(await this.isDisplayedInViewport())) {
            await this.el.scrollIntoView();
        }
    }
     
    public async scrollIntoViewTop(): Promise<void>{
        await this.el.scrollIntoView(true);
    }

     public async isDisplayedInViewport(): Promise<boolean>{
        return this.el.isDisplayedInViewport();
     }

     public async getLocation(): Promise<Location> {
        return this.el.getLocation();
     }

     public async getCenterLocationRounded(): Promise<Location> {
        const location = await this.getLocation();
        const size = await this.getSize();

        return{
            x: Math.round(location.x) + Math.round(size.width/2),
            y: Math.round(location.y) + Math.round(size.width/2),
        };
     }

     public async getSize(): Promise<Size> {
        return this.el.getSize();
     }
     
     public async dragAndDropMobile(
        direction: { x: number; y: number },
        duration: number = timeouts.smallest,
     ): Promise<void> {
        const location = await this.getCenterLocationRounded();

        await browser.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'mouse' },
                actions: [
                    { type: 'pointerMove',duration: 0,x: location.x,y: direction.y },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', button: 10 },
                    { type: 'pointerMove',duration: duration, origin: 'pointer', x: location.x, y: direction.y },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);
     }

     public async clickRelativeCoordinates(
        coordinates: { x: number; y: number },
        duration: number = timeouts.smallest,
     ): Promise<void> {
        const location = await this.getCenterLocationRounded();

        await browser.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'mouse' },
                actions: [
                     type: 'pointerMove',duration: 0,x: location.x,y: direction.y },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', button: 10 },
                    { type: 'pointerMove',duration: duration, origin: 'pointer', x: location.x, y: direction.y },
                    { type: 'pointerUp', button: 0 },
                ],
            },
        ]);
     }
}