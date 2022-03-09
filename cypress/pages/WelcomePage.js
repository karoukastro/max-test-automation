import texts from '../fixtures/texts.json'
import list from '../fixtures/countriesAndButtons.json'

class WelcomePage {

    goTo() {
        cy.visit('/');
    }

    titleAndSubtitleShouldBe(language) {

        cy.get('.banner-title--md', { timeout: 10000 })
            .should('be.visible')
            .should('have.text', texts.title[language]);


        cy.get('.banner-subtitle', { timeout: 10000 })
            .should('be.visible')
            .should('have.text', texts.subtitles[language])
    }

    chooseLanguage(language) {
        cy.get('#' + language).click()
    }

    verifyCountryAndButtonsLanguage(language) {

        list.buttons.forEach(function (button) {
            cy.get('button[onclick="update_language_value(\'' + button.code + '\',true)"]')
                .should('be.visible')
                .should('contain.text', button[language])
        })

        list.countries.forEach(function (country) {
            cy.get('a[onclick="update_country_value(\'' + country.code + '\')"]')
                .should('be.visible')
                .should('contain.text', country[language])
        })
    }
}

export default new WelcomePage