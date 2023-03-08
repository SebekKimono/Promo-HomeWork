import {home} from "../support/pages/home";
import {login} from "../support/pages/login";
import {dashboard} from "../support/pages/dashboard";


describe('Tests for sign in page', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Sign in with valid credentials', () => {

        const email = 'smacioszek97+testacc@gmail.com'
        const password = 'TestPassword123'

        home.navigateToLoginPage();
        login.enterEmail(email).enterPassword(password).clickLoginButton();
        dashboard.verifyDashboard();

    })
    it('Try to sign in with blank credentials', () => {

        home.navigateToLoginPage();
        login.clickLoginButton().checkEmptyFieldsValidation();


    })
    it('Try to sign in with invalid password', () => {

        const email = 'smacioszek97+testacc@gmail.com'
        const password = 'WrongPassword'

        home.navigateToLoginPage();
        login.enterEmail(email).enterPassword(password).clickLoginButton().checkWrongPasswordValidation();

    })
})