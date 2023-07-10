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
    continueButton = "button[title='Continue']"

    visit(){
        cy.visit('https://automationteststore.com/index.php?rt=account/create')
    }

    enterFirstName(firstName){
        cy.get(this.firstName).type(firstName);
    }

    enterLastName(lastName){
        cy.get(this.lastName).type(lastName);
    }

    enterEmail(email){
        cy.get(this.email).type(email);
    }

    enterTelephone(telephone){
        cy.get(this.telephone).type(telephone);
    }

    enterFax(fax){
        cy.get(this.fax).type(fax);
    }

    enterCompany(company){
        cy.get(this.company).type(company);
    }

    enterAddress1(address1){
        cy.get(this.address1).type(address1);
    }

    enterAddress2(address2){
        cy.get(this.address2).type(address2);
    }

    enterCity(city){
        cy.get(this.city).type(city);
    }

    selectState(state){
        cy.get(this.state).select(state);
    }

    enterPostal(postal){
        cy.get(this.postal).type(postal);
    }

    selectCountry(country){
        cy.get(this.country).select(country);
    }

    enterLoginName(loginName){
        cy.get(this.loginName).type(loginName);
    }

    enterPassword(password){
        cy.get(this.password).type(password);
    }

    enterConfirmPassword(confirmPassword){
        cy.get(this.confirmPassword).type(confirmPassword);
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

}

export default Registration;