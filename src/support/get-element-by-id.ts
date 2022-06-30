//import { getCurrentEnv } from "../configs/enviroments-config";

export const getElementById = async (Id: string): Promise<WebdriverIO.Element> => {
    return $(`[id="${Id}"]`);
};
//export const getElement = async (elementValue: locatorValue): Promise<WebdriverIO.Element> => {
    export const getElement = async (locatorValue: string): Promise<WebdriverIO.Element> => {
    let locator: any;

    // if(driver.isMobile){
    //     locator = $(`[${elementValue.mobile}]`);
    // }else{
    //     if(getCurrentEnv() === 'dev'){
    //         locator = $(`[${elementValue.web_dev}]`);
    //     }else-if(getCurrentEnv() === 'qa'){
    //         locator = $(`[${elementValue.web_qa}]`);
    //     }
    // }
    // return locator;
    return locator = $(`[${locatorValue}]`);//For temporary
}