let loginName;
let password;

before(()=>{
    cy.fixture('userCredentials.json').then((credential)=>{
        loginName = Cypress.env('loginName', credential.loginName)
        password = Cypress.env('password', credential.password)
    })
})

describe('Login', function(){

    it('Login', function(){

        cy.visit('https://automationteststore.com/index.php?rt=account/login')

        cy.get('#loginFrm_loginname')
            .should('be.visible')
            .type(loginName)

        cy.get('#loginFrm_password')
            .should('be.visible')
            .type(password)

        cy.get("button[title='Login']")
            .should('be.visible')
            .click()

        cy.get('.maintext')
            .should('be.visible')
            .and('have.text', 'My Account')
            .url()
            .should('include', 'account/account')

    })
})