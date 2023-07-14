class Login{
    loginRegistrerLink = '#customer_menu_top';
    accountLoginPageConfirmationHeader = '.maintext';
    loginName = '#loginFrm_loginname';
    password = '#loginFrm_password';
    loginButton = "button[title='Login']";
    loginConfirmationHeader = '.maintext';

    verifyLoginRegisterLink(){
        cy.get(this.loginRegistrerLink).should('be.visible')
    }

    clickLoginRegisterLink(){
        cy.get(this.loginRegistrerLink).click()
    }

    verifyAccountLoginPageConfirmationHeader(){
        cy.get(this.accountLoginPageConfirmationHeader).should('be.visible')
    }

    inputLoginName(loginName){
        cy.get(this.loginName).should('be.visible').type(loginName)
    }

    inputPassword(password){
        cy.get(this.password).should('be.visible').type(password)
    }

    clickLoginButton(){
        cy.get(this.loginButton).should('be.visible').click()
    }

    verifyLogin(loginConfirmationText){
        cy.get("div[class='menu_text']").should('have.text', `Welcome back ${loginConfirmationText}`)
        cy.get(this.loginConfirmationHeader).should('be.visible').and('have.text', ' My Account')
        .url()
        .should('include', 'account/account')
    }



}

export default Login;