import login from '../pages/LoginPage';

describe('Login Page', function () {

    beforeEach(function () {
        login.goTo()
    })

    context('Login validations', function () {

        it('Incorrect Email', function () {

            cy.login({ username: 'test@test.com', password: 'Password1!' })
            login.fieldHasError('Please enter valid username and password')
        })

        it('Incorrect Password', function () {

            cy.login({ username: 'carolina@max.com', password: '12345' })
            login.fieldHasError('Please enter valid username and password')
        })

        it('Incorrect Email and Password', function () {

            cy.login({ username: 'test@test.com', password: '12345' })
            login.fieldHasError('Please enter valid username and password')
        })

        it('Required email and password', function () {

            login.submitForm()
            login.fieldHasError('Please enter a valid username and a valid password')
        })

        it.skip('Login with valid username and password', function () {
            //TO FINISH: WHEN VALID USERNAME AND PASSWORD ARE AVAILABLE
            //cy.login({ username: '   @max.com', password: 'Password1!' })
        })
    })
})