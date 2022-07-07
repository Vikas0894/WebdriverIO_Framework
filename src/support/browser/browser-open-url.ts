export const browserOpenUrl = async (url: string): Promise<void> => {
    await browser.url(url);
};
