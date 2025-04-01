class CartCheckout{
    viewCheckout() {
        return cy.get('.btn.btn-secondary.btn-block').click({force:true})
    }

    selectCheckout() {
        return cy.get('.btn.btn-lg.btn-primary').eq(1).click()
    }

    firstNameInput(value) {
        return cy.get('[name="firstname"]').type(value)
    }

    lastNameInpput(value) {
        return cy.get('[name="lastname"]').type(value)
    }

    emailInput(value) {
        return cy.get('[name="email"]').type(value)
    }

    telephoneInput(value) {
       return cy.get('[name="telephone"]').type(value)
    }
    
    passwordInput(value) {
       return cy.get('[name="password"]').type(value)
    }

    confirmPasswordInput(value) {
        return cy.get('[name="confirm"]').type(value)
    }

    companyInput(value) {
        return cy.get('[name="company"]').type(value)
    }

    address1Input(value) {
        return cy.get('[name="address_1"]').type(value)
    }
   
    address2Input(value) {
        return cy.get('[name="address_2"]').type(value)
    }

    cityInput(value) {
        return cy.get('[name="city"]').type(value)
    }

    postCode(value) {
        return cy.get('[name="postcode"]').type(value)
    }
    
    uncheckNewsLetter() {
        return cy.get('#input-newsletter').uncheck({force:true})
    }

    newLetter() {
        return  cy.get('#input-newsletter')
    }

    checkAccount() {
        return cy.get('#input-account-agree').check({force:true})
    }

    accountAgree() {
       return cy.get('#input-account-agree')
    }
    
    checkAgree() {
        return cy.get('#input-agree').check({force:true})
    }

    Agree() {
        return cy.get('#input-agree')
    }

    buttonSave() {
        return cy.get('#button-save').click()
    }

   buttonConfirm() {
       return cy.get('#button-confirm').click()
   }

   orderHeader() {
    return cy.get('#content > .page-title.mb-3')
   }
   
   successfulOrder() {
    return cy.get('#content > .page-title.my-3')
   }
}

export default new CartCheckout()