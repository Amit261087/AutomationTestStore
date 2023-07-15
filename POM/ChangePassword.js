class ChangePassword{
    loginRegistrerLink = '#customer_menu_top';
    loginName = '#loginFrm_loginname';
    password = '#loginFrm_password';
    loginButton = "button[title='Login']";
    welcomeBackMenu = "div[class='menu_text']";
    changePasswordPageHeader = '.maintext';
    currentPassword = '#PasswordFrm_current_password';
    newPassword = '#PasswordFrm_password';
    newPasswordConfirm = '#PasswordFrm_confirm';
    continueButton = "button[title='Continue']"
    confirmPasswordChange = '.alert'

    clickLoginRegisterLink()
    {
        cy.get(this.loginRegistrerLink).click()
    }

    enterLoginName(loginName)
    {
        cy.get(this.loginName).type(loginName)
    }

    enterPassword(password)
    {
        cy.get(this.password).type(password)
    }

    clickLoginButton()
    {
        cy.get(this.loginButton).click()
    }

    clickChangePasswordLink()
    {
        cy.get(this.welcomeBackMenu).trigger('mouseover').then(()=>{
            cy.get('.open > .sub_menu').contains('Change password').click()
        })
    }

    confirmChangePasswordPage()
    {
        cy.get(this.changePasswordPageHeader).should('be.visible').and('have.text', ' Change Password')
    }

    enterCurrentPassword(currentPassword)
    {
        cy.get(this.currentPassword).type(currentPassword)
    }

    enterNewPassword(newPassword)
    {
        cy.get(this.newPassword).type(newPassword)
    }

    enterNewPasswordConfirm(newPasswordConfirm)
    {
        cy.get(this.newPasswordConfirm).type(newPasswordConfirm)
    }

    clickContinueButton()
    {
        cy.get(this.continueButton).click();
    }

    verifyPasswordChange(){
        cy.get(this.confirmPasswordChange).should('be.visible').and('contain', 'Success: Your password has been successfully updated.')
    }
}

export default ChangePassword;