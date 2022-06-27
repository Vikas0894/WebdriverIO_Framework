import chai from "chai";

const chaiExpect = chai.expect;

export const assertNotEqual = (frist: any, second: any, message: string): void => {
    try {
        //eslint-disable-next-line no-used-expressions
        chaiExpect(frist).to.be.equal(second, message);
    } catch (e) {
        throw new Error(`${message}: ${e}`);
    }
};