export class SignUp {

    enterEmailAddress(email) {
        cy.get('#signup-email').type(email).should('have.value', email);
        return this;
    }
    enterFullName(fullName) {
        cy.get('#signup-fullName').type(fullName).should('have.value', fullName);
        return this;
    }
    enterPassword(password) {
        cy.get('#signup-password').type(password).should('have.value', password);
        return this
    }

    clickSignUpButton() {
        cy.get('[data-qaid="signup_new_btn"]').click();
        return this;
    }
    checkEmptyFieldsValidation() {
        cy.contains('This is not an email address').should('be.visible');
        cy.get('[class="promo__input Auth__fullName-input Auth__input--error promo__input--default error"]').should('contain', 'This field can\'t be empty').and('be.visible');
        cy.get('[class="promo__input promo__password-input Auth__password-input Auth__password-input--signup Auth__input--error promo__password-input--default promo__input--default error"]').should('contain', 'This field can\'t be empty').and('be.visible');
        return this;
    }
}

export const signUp = new SignUp();
