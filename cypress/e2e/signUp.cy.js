import {home} from "../support/pages/home";
import {signUp} from "../support/pages/signUp";
import {dashboard} from "../support/pages/dashboard";

describe('Tests for sign up page', () => {

  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Create a new account', () => {

    const email = 'fake-email' + Math.random().toFixed(5) + '@domain.com'
    const fullName = 'John Doe'
    const password = '12345678'

    home.navigateToSignupPage();
    signUp.enterEmailAddress(email).enterFullName(fullName).enterPassword(password).clickSignUpButton();
    dashboard.verifyOnBoardingScreen();

  })
  it('Try to sign up with all fields empty', () => {

    home.navigateToSignupPage();
    signUp.clickSignUpButton().checkEmptyFieldsValidation();
  })
})