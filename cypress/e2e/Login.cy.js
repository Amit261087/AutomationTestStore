import Login from "../../POM/Login";

const login = new Login();
let loginName;
let password;
let firstName;

before(()=>{
    cy.fixture('userCredentials.json').then((credential)=>{
        loginName = credential.loginName
        password = credential.password
        firstName = credential.firstName
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
    })
})