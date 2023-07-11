import Registration from '../../POM/Registration';
import testData from '../fixtures/Data.json';


const faker = require('faker')

const registration = new Registration();

describe('Registration', () => {    


    it.only('Registration', () => {

        registration.visit();
        registration.enterFirstName(testData.firstName);
        registration.enterLastName(testData.lastName);
        registration.enterEmail(faker.internet.email());
        registration.enterTelephone(testData.telephone);
        registration.enterFax(testData.fax);
        registration.enterCompany(testData.company);
        registration.enterAddress1(testData.address1);
        registration.enterAddress2(testData.address2);
        registration.enterCity(testData.city);
        registration.selectCountry(testData.country);
        registration.selectState(testData.state);
        registration.enterPostal(testData.postal);

        const loginName = faker.internet.userName();
        const password = testData.password;

        cy.fixture('userCredentials.json').then((credential)=>{
            credential.loginName = loginName;
            credential.password = password;
            cy.writeFile('cypress/fixtures/userCredentials.json', credential)
        })
        
        registration.enterLoginName(loginName);
        registration.enterPassword(testData.password);
        registration.enterConfirmPassword(testData.confirmPassword);
        registration.optForNewsLetter();
        registration.checkPrivacy();
        registration.clickContinueButton();
        registration.confirmAccountCreation();
        registration.clickContinueToFinishRegistration();
    });
    
});