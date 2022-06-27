export const getOutputFileName = (capability: any): string => {
    const tagArg = process.argv.find((a: string) => a.indexOf('tagExprssion=') > -1);

if (tagArg) {
    const match = tagArg.match(/.*=(.*)/);

    if (match && match[1]) {
        let name = match[1].replace(/ and /g, '-').replace(/@/g, '');

        if (tagArg.indexOf('@mobile') > -1) {
            name = `${name}-${capability.platformName.toLowerCase()}`;
        }

        return name;
    } else {
        throw new Error('Could not get tag from Script');
    }
} else {
    throw new Error('No tag expression in the Script');
}
};

export const CUCUMBER_JSON_REPORTER_CONFIG = {
    OUTPUT_DIR: 'reports/json',
};
