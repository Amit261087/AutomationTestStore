import Registration from '../../POM/Registration';
import testData from '../fixtures/Data.json';

const faker = require('faker')
const registration = new Registration();
let firstName;
let lastName;
let loginName;
let email;


before(() => {
    firstName = faker.name.firstName();
    lastName = faker.name.lastName();
    loginName = faker.internet.userName();
    email = faker.internet.email();
    const password = testData.password;
    cy.fixture('userCredentials.json').then((credential) => {
        credential.loginName = loginName;
        credential.password = password;
        credential.firstName = firstName;
        credential.lastName = lastName;
        credential.email = email;
        cy.writeFile('cypress/fixtures/userCredentials.json', credential)
    })
})

describe('Registration', () => {

    it('Registration', () => {
        registration.visit();
        registration.enterFirstName(firstName);
        registration.enterLastName(lastName);
        registration.enterEmail(email);
        registration.enterTelephone(testData.telephone);
        registration.enterFax(testData.fax);
        registration.enterCompany(testData.company);
        registration.enterAddress1(testData.address1);
        registration.enterAddress2(testData.address2);
        registration.enterCity(testData.city);
        registration.selectCountry(testData.country);
        registration.selectState(testData.state);
        registration.enterPostal(testData.postal);
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