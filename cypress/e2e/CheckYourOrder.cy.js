let loginName;
let password;
let firstName;
let orderNumber;
let email;

before(() => {
    cy.fixture('userCredentials.json').then((credential) => {
        loginName = credential.loginName
        password = credential.password
        firstName = credential.firstName
        orderNumber = credential.orderNumber
        email = credential.email
    })
})

describe('Check Order Details', function () {

    it('Check Order Details', function () {
        cy.visit('https://automationteststore.com/')

        cy.get('#topnav > .form-control').select('Check Your Order')
        cy.get('.maintext').should('be.visible').and('contain', 'Order Details')
        cy.get('#CheckOrderFrm_order_id').type(orderNumber)
        cy.get('#CheckOrderFrm_email').type(email)
        cy.get('.btn.btn-orange.pull-right').click()

        cy.contains('Order ID')
            .parent()
            .then((parentElement) => {
                // Get the text content of the parent element containing the Order ID
                const orderIDText = parentElement.text();
                // Assert that the Order ID text contains the expected value
                expect(orderIDText).to.include(orderNumber);
            });
    })
})