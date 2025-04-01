class HomePage {
    shopChategory() {
        return cy.get('#entry_217833 > a > .icon.svg-icon').click()
    }

    mp3PlayerPage () {
        return cy.get('.info > .title').eq(4).click()
    }
}

export default new HomePage()