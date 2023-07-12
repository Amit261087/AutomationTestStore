let loginName;
let password;

before(() => {
    cy.fixture('userCredentials.json').then((credential) => {
        loginName = Cypress.env('loginName', credential.loginName);
        password = Cypress.env('password', credential.password);
    });
});

describe('Add Product in Cart', function () {
    it('Add Product in Cart', () => {
        cy.visit('https://automationteststore.com');
        cy.contains('Login or register')
            .should('be.visible')
            .click();
        cy.get('#loginFrm_loginname')
            .should('be.visible')
            .type(loginName);
        cy.get('#loginFrm_password')
            .should('be.visible')
            .type(password);
        cy.get("button[title='Login']")
            .should('be.visible')
            .click();

        cy.get('.dropdown-toggle i')
            .should('be.visible')
            .click()

        cy.get('.fa.fa-trash-o.fa-fw').each(($el, index, $list) => {
            cy.get('.fa.fa-trash-o.fa-fw').click({ multiple: true })
        })
    })
})    