class Registration{
    firstName = '#AccountFrm_firstname';
    lastName = '#AccountFrm_lastname';
    email = '#AccountFrm_email';
    telephone = '#AccountFrm_telephone';
    fax = '#AccountFrm_fax';
    company = '#AccountFrm_company';
    address1 = '#AccountFrm_address_1';
    address2 = '#AccountFrm_address_2';
    city = '#AccountFrm_city';
    state = '#AccountFrm_zone_id';
    postal = '#AccountFrm_postcode';
    country = '#AccountFrm_country_id';
    loginName = '#AccountFrm_loginname';
    password = '#AccountFrm_password';
    confirmPassword = '#AccountFrm_confirm';
    yesNewsletter = '#AccountFrm_newsletter1';
    noNewsletter = '#AccountFrm_newsletter0';
    policy = '#AccountFrm_agree';
    continueButton = "button[title='Continue']";
    confirmHeaderText = '.maintext';
    continueToFinishRegistration = '.mb40 > .btn';

    visit(){
        cy.visit('https://automationteststore.com/')
        cy.contains('Login or register')
            .should('be.visible')
            .click()
        cy.get('.maintext')
            .should('be.visible')
            .and('have.text', ' Account Login')
        cy.get("button[title='Continue']")
            .should('be.visible')
            .click()
            .url()
            .should('include', 'account/create')
        
    }

    enterFirstName(firstName){
        cy.get(this.firstName)
            .should('be.visible')
            .type(firstName)
            .should('have.value', firstName)
    }

    enterLastName(lastName){
        cy.get(this.lastName)
            .should('be.visible')
            .type(lastName)
            .should('have.value', lastName)
    }

    enterEmail(email){
        cy.get(this.email)
            .should('be.visible')
            .type(email)
            .should('have.value', email)
    }

    enterTelephone(telephone){
        cy.get(this.telephone)
            .should('be.visible')
            .type(telephone)
            .should('have.value', telephone)
    }

    enterFax(fax){
        cy.get(this.fax)
            .should('be.visible')
            .type(fax)
            .should('have.value', fax)
    }

    enterCompany(company){
        cy.get(this.company)
            .should('be.visible')
            .type(company)
            .should('have.value', company)
    }

    enterAddress1(address1){
        cy.get(this.address1)
            .should('be.visible')
            .type(address1)
            .should('have.value', address1)
    }

    enterAddress2(address2){
        cy.get(this.address2)
            .should('be.visible')
            .type(address2)
            .should('have.value', address2)
    }

    enterCity(city){
        cy.get(this.city)
            .should('be.visible')
            .type(city)
            .should('have.value', city)
    }

    selectState(state){
        cy.get(this.state)
            .should('be.visible')
            .select(state)
            .should('contain', state)
    }

    enterPostal(postal){
        cy.get(this.postal)
            .should('be.visible')
            .type(postal)
            .should('have.value', postal)
    }

    selectCountry(country){
        cy.get(this.country)
            .should('be.visible')
            .select(country)
            .should('contain', country)
    }

    enterLoginName(loginName){
        cy.get(this.loginName)
            .should('be.visible')
            .type(loginName)
            .should('have.value', loginName)
    }

    enterPassword(password){
        cy.get(this.password)
            .should('be.visible')
            .type(password)
            .should('have.value', password)
    }

    enterConfirmPassword(confirmPassword){
        cy.get(this.confirmPassword)
            .should('be.visible')
            .type(confirmPassword)
            .should('have.value', confirmPassword)
    }

    optForNewsLetter(){
        cy.get(this.yesNewsletter).click();
    }

    checkPrivacy(){
        cy.get(this.policy).check();
    }

    clickContinueButton(){
        cy.get(this.continueButton).click()
    }

    confirmAccountCreation(){
        cy.get(this.confirmHeaderText)
            .should('be.visible')
            .and('have.text', ' Your Account Has Been Created!')
    }

    clickContinueToFinishRegistration(){
        cy.get(this.continueToFinishRegistration).click()
    }

}

export default Registration;