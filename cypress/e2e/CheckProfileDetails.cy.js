let loginName;
let password;
let firstName;
let lastName;
let email;

before(() => {
    cy.fixture('userCredentials.json').then((credential) => {
        loginName = credential.loginName
        password = credential.password
        firstName = credential.firstName
        lastName = credential.lastName
        email = credential.email
    })
})

describe('Check Profile Details', function () {

    it('Check Profile Details', function () {
        cy.visit('https://automationteststore.com/')
        cy.contains('Login or register').click()
        cy.get('.returncustomer').should('be.visible').and('contain', 'Returning Customer')
        cy.get('#loginFrm_loginname').should('be.visible').type(loginName)
        cy.get('#loginFrm_password').should('be.visible').type(password)
        cy.get("button[title='Login']").should('be.visible').click()
        cy.get("div[class='menu_text']").should('be.visible').and('have.text', `Welcome back ${firstName}`)
        cy.get("div[class='menu_text']").trigger('mouseover').then(() => {
            cy.contains('Edit account details').click()
            cy.get('.input-group.col-md-4').first().should('contain', loginName)
            cy.get('#AccountFrm_firstname').should('have.value', firstName)
            cy.get('#AccountFrm_lastname').should('have.value', lastName)
            cy.get('#AccountFrm_email').should('have.value', email)
        })
    })
})