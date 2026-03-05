class Checkout{
    // Elements Selector
    get addToCartButton() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    get cartBadge() {
        return cy.get('[data-test="shopping-cart-link"]');
    }
    
    get checkoutButton() {
        return cy.get('#checkout');
    }

    get firstNameField() {
        return cy.get('#first-name');
    }

    get lastNameField() {
        return cy.get('#last-name');
    }

    get postalCodeField() {
        return cy.get('#postal-code');
    }

    get continueButton() {
        return cy.get('#continue');
    }

    get finishButton() {
        return cy.get('#finish');
    }

    // Actions (Methods)
    clickAddToCart() {
        this.addToCartButton.click();
    }

    clickCart() {
        this.cartBadge.click();
    }

    clickCheckout() {
        this.checkoutButton.click();
    }

    fillFirstName(firstName) {
        if (firstName) this.firstNameField.type(firstName);
    }

    fillLastName(lastName) {
        if (lastName) this.lastNameField.type(lastName);
    }

    fillPostalCode(postalCode) {
        if (postalCode) this.postalCodeField.type(postalCode);
    }

    checkoutForm(firstName, lastName, postalCode) {
        this.fillFirstName(firstName);
        this.fillLastName(lastName);
        this.fillPostalCode(postalCode);
        this.continueButton.click();
    }

    clickFinish() {
        this.finishButton.click();
    }

    // Assertions (Validations)
    verifyCheckoutSuccess() {
        cy.url().should('include', '/checkout-complete.html');
        cy.contains('Thank you for your order!').should('be.visible');
    }

    verifyCheckoutFailed() {
        cy.get('.error-message-container.error').should('be.visible');
    }
}

export default Checkout;