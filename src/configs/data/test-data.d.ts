declare module 'test-data' {

    export namespace NSCreditCardData {
        type Data = {
            PERSONAL_INFO: NSCreditCardData.PersonalInfo;
            CONTACT_INFO: NSCreditCardData.ContactInfo;
            FINANCES: NSCreditCardData.Finances;
            ADDRESS: NSCreditCardData.Address;
            VALIDATION_MESSAGE: any;
        };

        type PersonalInfo = {
            FIRST_NAME: string;
            MIDDLE_NAME: string;
            LAST_NAME: string;
            DATE_OF_BIRTH: string;
            DATE_OF_BIRTH_READ_MODE: string;
            SSN: string;
            US_RESIDENT?: string;
        };

        type ContactInfo = {
            PHONE_NUMBER: string;
            EMAIL_ADDRESS: string;
        };

        type Address = {
            RESIDENTIAL_ADDRESS: string;
            RESIDENTIAL_ADDRESS_PLUS_ZIP: string;
            MAILING_ADDRESS: string;
            MAILING_ADDRESS_PLUS_ZIP: string;
            MAILING_APARTMENT: string;
        };

        type Finances = {
            EMPLOYMENT_STATUS: string;
            ANNUAL_INCOME: string;
            ANNUAL_INCOME_READ_MODE: string;
            MONTHLY_RENT: string;
            MONTHLY_RENT_READ_MODE: string;
        };
    }
}
