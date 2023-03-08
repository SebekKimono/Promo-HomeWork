export class Login {

    enterEmail(email) {

        cy.get('#email').type(email).should('have.value', email);
        return this;
    }

    enterPassword(password) {
        cy.get('#password').type(password).should('have.value', password);
        return this;
    }
    clickLoginButton() {
        cy.get('[data-qaid="login_new_btn"]').click();
        return this;
    }
    checkEmptyFieldsValidation() {
        cy.contains('This is not an email address').should('be.visible');
        cy.contains('This field can\'t be empty').should('be.visible');
        return this;
    }
    checkWrongPasswordValidation() {
        cy.contains('The email or password you entered is incorrect').should('be.visible');
        return this;
    }
}

export const login = new Login();
