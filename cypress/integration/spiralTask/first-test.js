describe('Verify Google Home Page', () => {

    it('Verify Google logo is visible', () => {

        cy.visit('https://www.google.com/');

        cy.get('picture').should('be.visible');

    })

    it('Verify Search bar is present', () => {

        cy
        .get('input[title="Search"]').should('be.exist');

    })

    it('Type in Search bar and click enter', () => {

        cy.get('input[title="Search"]').type('Ducks').type('{enter}')
    
    })

    it('Verify that you got search results', () => {

        cy.get("#result-stats").first().should('be.exist');

    })

})