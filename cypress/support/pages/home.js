export class HomePage {

navigateToLoginPage() {
    cy.contains('Login').click();
    return this;
}
navigateToSignupPage() {
    cy.contains('Try for free').click();
    return this;
}
}

export const home = new HomePage();
