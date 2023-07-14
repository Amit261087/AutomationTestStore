import ChangePassword from "../../POM/ChangePassword";
const faker = require('faker')

const changePassword = new ChangePassword();

let loginName;
let password;
let currentPassword = password;
let newPassword = faker.internet.password();



before(()=>{
    cy.fixture('userCredentials.json').then((credential)=>{
        loginName = Cypress.env('loginName', credential.loginName)
        password = Cypress.env('password', credential.password)
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
        changePassword.enterCurrentPassword(currentPassword);
        changePassword.enterNewPassword(newPassword);
        changePassword.enterNewPasswordConfirm(newPassword);
    })
})