let loginName;
let password;

before(() => {
    cy.fixture('userCredentials.json').then((credential) => {
        loginName = Cypress.env('loginName', credential.loginName);
        password = Cypress.env('password', credential.password);
    });
});

describe('Add, Update & Delete Product in Cart', function () {
    const productToBeAdded = 'Skinsheen Bronzer Stick';
    it('Add Product in Cart', () => {
        cy.visit('https://automationteststore.com');
        cy.contains('Login or register').should('be.visible').click();
        cy.get('#loginFrm_loginname').should('be.visible').type(loginName);
        cy.get('#loginFrm_password').should('be.visible').type(password);
        cy.get("button[title='Login']").should('be.visible').click();
        cy.get('.maintext').should('be.visible').and('contain', 'My Account');
        cy.get('.active.menu_home').should('be.visible').and('have.text', 'Home').click();
        cy.get('.col-md-3.col-sm-6.col-xs-12').then(() => {
            cy.contains('.prdocutname', productToBeAdded)
                .parents('.col-md-3.col-sm-6.col-xs-12')
                .find('.productcart')
                .trigger('click')
        });
        cy.get('#topnav > .form-control').select('Cart')
        cy.get('.maintext').should('be.visible').and('have.text', ' Shopping Cart')
        cy.get('#cart_checkout1').should('be.visible').click()
        cy.get('#checkout_btn').click()
        cy.get('.maintext').should('be.visible').and('contain', ' Your Order Has Been Processed!')
    })
})