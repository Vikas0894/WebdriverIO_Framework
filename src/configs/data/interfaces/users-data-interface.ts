export interface IUSER {
    USERNAME?: string;
    PASSWORD?: string;
    CUSTOMER_ID?: string;
    FIRST_NAME?: string;
    MIDDLE_NAME?: string;
    LAST_NAME?: string;
    DATE_OF_BIRTH?: string;
    SSN?: string;
    PAN?: string;
    ROUTING_NUMBER?: string;
    ACCOUNT_NUMBER?: string;
    NICKNAME?: string;
    APT?: string;
    STREET?: string;
    HOME_CITY?: string;
    HOME_STATE?: string;
    ZIP?: string;
    PHONE_NUMBER?: string;
    CARD?: {
        PRODUCT_CODE?: string;
        SUB_PRODUCT_CODE?: string;
        BILLING_CODE?: string;
        CREDIT_LIMIT?: string;
    };
    ONBORDING_DATA?:{
        ROUTING_NUMBER?: string;
        ACCOUNT_NUMBER?: string;
        ACCOUNT_TYPE?: 1 | 2; //1- checking ,  2- saving
        NICKNAME?: string;
    };
    STATEMENTDELIVERYOPTION?: string;
}

export interface IUSERS {
    getExisting: () => IUSER;
    getNonExisting: () => IUSER;
    // getExisting: () => IUSERS;
    // getExisting: () => IUSERS;
    // getExisting: () => IUSER;
    // getExisting: () => IUSER;
    // getExisting: () => IUSER;
    // getExisting: () => IUSER;
    // getExisting: () => IUSER;
    // getExisting: () => IUSER;
}

export interface IUSERS_DATA {
    [key: string]: IUSERS;
}