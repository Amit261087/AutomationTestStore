import Registration from '../../POM/Registration';
import testData from '../fixtures/Data.json';

const registration = new Registration();

describe('Registration', () => {    


    it.only('Registration', () => {

        registration.visit();
        registration.enterFirstName(testData.firstName);
        registration.enterLastName(testData.lastName);
        registration.enterEmail(testData.email);
        registration.enterTelephone(testData.telephone);
        registration.enterFax(testData.fax);
        registration.enterCompany(testData.company);
        registration.enterAddress1(testData.address1);
        registration.enterAddress2(testData.address2);
        registration.enterCity(testData.city);
        registration.selectCountry(testData.country);
        registration.selectState(testData.state);
        registration.enterPostal(testData.postal);
        
        registration.enterLoginName(testData.loginName);
        registration.enterPassword(testData.password);
        registration.enterConfirmPassword(testData.confirmPassword);
        registration.optForNewsLetter();
        registration.checkPrivacy();
        registration.clickContinueButton();
    });
    
});