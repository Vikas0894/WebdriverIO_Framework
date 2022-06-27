export const getElement = async (locator: string): Promise<WebdriverIO.Element> => {
    return $(`${locator}`);
};

//we can remove this file