export class Dashboard {

    verifyDashboard() {
        cy.url().should('include', '/create');
        cy.contains('Create stand-out videos within minutes').should('be.visible');
        return this;
    }
    verifyOnBoardingScreen() {
        cy.url().should('include', '/create');
        cy.contains('Watch your business come').should('be.visible');
        cy.contains('to life with video.').should('be.visible');
        return this;
    }
}

export const dashboard = new Dashboard();
