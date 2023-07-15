class Logout{
    accountMenuLink = "div[id='topnav'] select[class='form-control']";
    logoutHeaderText = '.maintext';

    clickLogoutLink()
    {
        cy.get(this.accountMenuLink).select('Logout')
    }

    verifyLogoutHeader()
    {
        cy.get(this.logoutHeaderText).should('be.visible').and('contain', 'Account Logout')
            .url()
            .should('include', 'account/logout')
    }
}

export default Logout;