import Checkout from "../support/POM/Checkout";

describe('TC01 Checkout Process', () => {

    const checkout = new Checkout() 

    let checkoutData

    before(() => {
        cy.fixture('checkout/checkoutData').then((data) => {
            checkoutData = data
        })
    })

    beforeEach(() => {
        cy.visit('/')
        cy.loginWithData(0)
        cy.url().should('include', '/inventory.html')
    })

    context('TC01001 Valid Checkout Process', () => {
    it ('Berhasil melakukan checkout dengan data valid', () => {
        const { first_name, last_name, postal_code } = checkoutData.validCheckoutForm
        // Tambahkan produk ke keranjang
        
        checkout.clickAddToCart()
        checkout.clickCart()
        checkout.clickCheckout()

        // Isi form checkout
        checkout.checkoutForm(first_name, last_name, postal_code)
        // Finish
        checkout.clickFinish()

        // Verifikasi checkout berhasil
        checkout.verifyCheckoutSuccess()
    })
    })

    context('TC01002 Invalid Checkout Process', () => {
    it ('Gagal melakukan checkout dengan data invalid', () => {
        const { first_name, last_name, postal_code } = checkoutData.invalidCheckoutForm
        // Tambahkan produk ke keranjang
        checkout.clickAddToCart()
        checkout.clickCart()
        checkout.clickCheckout()

        // Isi form checkout
        checkout.checkoutForm(first_name, last_name, postal_code)
        
        // Verifikasi checkout berhasil
        checkout.verifyCheckoutFailed()
    })
    })
    
})