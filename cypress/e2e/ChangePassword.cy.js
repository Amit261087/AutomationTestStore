import ChangePassword from "../../POM/ChangePassword";
const faker = require('faker')

const changePassword = new ChangePassword();
let loginName;
let password;
let currentPassword;
let newPassword;

before(()=>{
    cy.fixture('userCredentials.json').then((credential)=>{
        loginName = credential.loginName;
        password = credential.password;
    })
})

after(()=>{
    cy.fixture('userCredentials.json').then((credential) => {
        credential.password = newPassword;
        cy.writeFile('cypress/fixtures/userCredentials.json', credential)
    })
})

describe('Change Password', function(){

    it('Chnage Password', function(){
        cy.visit('https://automationteststore.com/')
        changePassword.clickLoginRegisterLink();
        changePassword.enterLoginName(loginName);
        changePassword.enterPassword(password);
        changePassword.clickLoginButton();
        changePassword.clickChangePasswordLink();
        changePassword.confirmChangePasswordPage();
        currentPassword = password;
        newPassword = faker.internet.password();        
        changePassword.enterCurrentPassword(currentPassword);
        changePassword.enterNewPassword(newPassword);
        changePassword.enterNewPasswordConfirm(newPassword);
        changePassword.clickContinueButton();
        changePassword.verifyPasswordChange();
    })
})