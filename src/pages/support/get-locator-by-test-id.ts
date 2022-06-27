import { Selector } from 'webdriverio';

export const getLocatorByTestId =(testId: string): Selector => {
    return `[tet-id="${testId}]`;
}