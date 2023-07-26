import testdata from '../fixtures/Data.json'
let loginName;
let password;

before(() => {
    cy.fixture('userCredentials.json').then((credential) => {
        loginName = credential.loginName;
        password = credential.password;
    })
})

describe('Order Hair Care Products', function () {
    it('Order Hair Care Products', function () {
        cy.visit('https://automationteststore.com/')
        cy.contains('Login or register').should('be.visible').click();
        cy.get('#loginFrm_loginname').should('be.visible').type(loginName);
        cy.get('#loginFrm_password').should('be.visible').type(password);
        cy.get("button[title='Login']").should('be.visible').click();
        cy.get('.nav-pills.categorymenu').contains('Books').click()
        testdata.bookProductName.forEach((element) => {
            cy.get('.col-md-3.col-sm-6.col-xs-12').then(() => {
                cy.contains('.prdocutname', element)
                    .parents('.col-md-3.col-sm-6.col-xs-12')
                    .find('.productcart')
                    .trigger('click')
            });
        })
    })
})