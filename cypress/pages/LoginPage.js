class LoginPage {

    goTo() {
        cy.visit('/login/')
        this.loginPageShouldBeVisible()
    }

    loginPageShouldBeVisible() {
        cy.get('h1')
            .should('be.visible')
            .should('contain.text', 'Sign In To Max')
    }

    submitForm() {
        cy.get('#submit').click()
    }

    fieldHasError(expectedMessage) {
        cy.get('#message .alert', { timeout: 10000 })
            .should('be.visible')
            .should('contains.text', expectedMessage)
    }
}

export default new LoginPage