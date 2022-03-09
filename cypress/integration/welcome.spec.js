import welcome from '../pages/WelcomePage';

describe('Welcome Page', function () {

    context('Select each language avaliable', function () {

        before(function () {
            welcome.goTo()
        });

        it('Select Spanish as language, all texts and buttons should be in Spanish', function () {
            let language = 'es'
            welcome.chooseLanguage(language)
            welcome.titleAndSubtitleShouldBe(language)
            welcome.verifyCountryAndButtonsLanguage(language)
        })

        it('Select French as language, all texts and buttons should be in French', function () {
            let language = 'fr'
            welcome.chooseLanguage(language)
            welcome.titleAndSubtitleShouldBe(language)
            welcome.verifyCountryAndButtonsLanguage(language)
        })

        it('Select English as language, all texts and buttons should be in English', function () {
            let language = 'en'
            welcome.chooseLanguage(language)
            welcome.titleAndSubtitleShouldBe(language)
            welcome.verifyCountryAndButtonsLanguage(language)
        })
    })
})