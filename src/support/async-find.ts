export  const asyncFind = async (arr: Array<any>, predicate: (el: any) => Promise<boolean>): Promise<any> => {
    const results = await Promise.all(arr.map(predicate));
    const index = results.findIndex(result => result);

    if (index === -1) {
        throw new Error('Async find did not find any element');
    }

    return arr[index];
};