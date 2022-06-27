export const asyncMap = async (arr: Array<any>, predicate: (el: any) => Promise<any>): Promise<any> => {
    return Promise.all(arr.map(predicate));
};