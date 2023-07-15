import Login from "../../POM/Login";
import Logout from "../../POM/Logout";

const login = new Login();
const logout = new Logout();
let loginName;
let password;
let firstName;

before(()=>{
    cy.fixture('userCredentials.json').then((credential)=>{
        loginName = Cypress.env('loginName', credential.loginName)
        password = Cypress.env('password', credential.password)
        firstName = Cypress.env('firstName', credential.firstName)
    })
})

describe('Login', function(){

    it('Login', function(){
        cy.visit('https://automationteststore.com/')
        login.verifyLoginRegisterLink();
        login.clickLoginRegisterLink();
        login.verifyAccountLoginPageConfirmationHeader();
        login.inputLoginName(loginName);
        login.inputPassword(password);
        login.clickLoginButton();
        login.verifyLogin(firstName);
        logout.clickLogoutLink();
        logout.verifyLogoutHeader();
    })
})