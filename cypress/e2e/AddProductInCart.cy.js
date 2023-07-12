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
        cy.get('.maintext')
            .should('be.visible')
            .and('contain', 'My Account');
        cy.get('.active.menu_home')
            .should('be.visible')
            .and('have.text', 'Home')
            .focus()
            .click();

        const producttobeadded = 'Brunette expressions Conditioner'

        cy.get("a[class$='prdocutname']").each(($el, index, $list) => {
            const text = $el.text();
            if (text === producttobeadded) {
                cy.get('.nostock')
                    .its('length')
                    .then((count) => {
                        cy.log(`Total out-of-stock products: ${count}`);
                        const adjustedIndex = index - count;
                        cy.get('.productcart')
                            .eq(adjustedIndex)
                            .click();
                    });
            }
        });
        cy.get('.dropdown-toggle i')
            .should('be.visible')
            .click()
        cy.get("td[class='align_left'] a").each(($el, index, $list) => {
            const text = $el.text()
            if (text == producttobeadded) {
                cy.log('Amit')
            }
        })
    });
});
