let loginName;
let password;
let orderNumber;

before(() => {
    cy.fixture('userCredentials.json').then((credential) => {
        loginName = credential.loginName;
        password = credential.password;
        orderNumber = credential.orderNumber
    });
});

describe('Order History', function () {

    it('Check Order in History', function () {
        cy.visit('https://automationteststore.com');
        cy.contains('Login or register').should('be.visible').click();
        cy.get('#loginFrm_loginname').should('be.visible').type(loginName);
        cy.get('#loginFrm_password').should('be.visible').type(password);
        cy.get("button[title='Login']").should('be.visible').click();
        cy.get('#topnav > .form-control').select('Check Your Order')
        cy.get('.container-fluid.mt20').invoke('text').then((text) => {
            const regex = /#(\d+)/i;
            const matches = text.match(regex)
            if (matches && matches.length > 1 && matches[1] === orderNumber) {
                cy.log('Order Exists');
            } else {
                cy.log('Order Not Exists');
            }
        })
    })
})