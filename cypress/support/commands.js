// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('loginSession', (username, password) => {
//     cy.session([username, password], () => {
//         cy.visit('/')
//         cy.get('#user-name').type(username)
//         cy.get('#password').type(password)
//         cy.get('#login-button').click()
//         cy.url().should('include', '/inventory.html')
//     })
//     cy.visit('/')
//     cy.window().then((win) => {
//         win.history.pushState({}, '', '/inventory.html')
//         win.dispatchEvent(new win.PopStateEvent('popstate', { state: {} }))
//     })
//     cy.url().should('include', '/inventory.html')
// })

import LoginPage from "./POM/LoginPage";

Cypress.Commands.add('loginWithData', (index = 0) => {
    cy.fixture('users/loginUsers').then((login) => {
        const loginPage = new LoginPage()
        const user = login[index]
        loginPage.usernameField.type(user.user_name)
        loginPage.passwordField.type(user.password)
        loginPage.submitButton.click()
    })
})