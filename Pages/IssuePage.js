class Mp3PlayerPage {

    pageHeader () {
       return cy.get('.entry-content.content-title.flex-grow-0 > .h4')
    }

    selectProduct() {
        return cy.get('.fas.fa-shopping-cart').eq(3).click({force:true})
    }

    viewCart() {
        return cy.get('.btn.btn-primary.btn-block').click({force:true})
    }

    cartItem() {
        return cy.get('a[href*="https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=31"]')
    }
}

export default new Mp3PlayerPage()