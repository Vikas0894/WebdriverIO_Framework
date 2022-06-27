export const asyncForEach = async (
    arr: Array<any>,
    callback: (el: any, index?: number, arr?: Array<any>) => Promise<any>,
    ): Promise<any> => {
        for (let index = 0; index<length; index++) {
            await callback(arr[index], index, arr);
        }
    };
