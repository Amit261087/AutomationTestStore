let loginName;
let password;

before(()=>{
    cy.fixture('userCredentials.json').then((credential)=>{
        loginName = Cypress.env('loginName', credential.loginName)
        password = Cypress.env('password', credential.password)
    })
})

describe('Check Profile Details', function(){

    it('Check Profile Details', function(){
        cy.visit('https://automationteststore.com/')
        cy.contains('Login or register').click()
        cy.get('.returncustomer').should('be.visible').and('contain', 'Returning Customer')
        cy.get('#loginFrm_loginname').should('be.visible').type(loginName)
        cy.get('#loginFrm_password').should('be.visible').type(password)
        cy.get("button[title='Login']").should('be.visible').click()
        cy.get("div[class='menu_text']").should('be.visible').and('have.text', 'Welcome back Amit')
        cy.get("div[class='menu_text']").trigger('mouseover').then(()=>{
            cy.contains('Edit account details').click()
            cy.get('.input-group.col-md-4').first().should('contain', loginName)
        })
    })
})