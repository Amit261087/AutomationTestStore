let loginName;
let password;

before(() => {
    cy.fixture('userCredentials.json').then((credential) => {
        loginName = credential.loginName;
        password = credential.password;
    })
})

describe('Tool Tip', function () {
    it('Tool Tip', function () {
        cy.visit('https://automationteststore.com/')
        cy.contains('Login or register').should('be.visible').click();
        cy.get('#loginFrm_loginname').should('be.visible').type(loginName);
        cy.get('#loginFrm_password').should('be.visible').type(password);
        cy.get("button[title='Login']").should('be.visible').click();
        cy.get('.nav-dash > li').each(($el, index, $list) => {
            cy.wrap($el).trigger('mouseover');
            cy.wrap($el).find('.tooltip.fade.top.in').should('be.visible').then((tooltip) => {
                const text = tooltip.text();
                cy.log(text);
            })
        })
    })
})