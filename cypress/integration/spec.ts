
    beforeEach(() => {
        cy.visit('https://www.wikipedia.org/');
    })

    describe('Navigate test',()=> {
    it('verify that user navigates to Wikipedia page', () => {
        cy.url().should('be.equal','https://www.wikipedia.org/')
        cy.get('.central-textlogo__image').should('contain.text','Wikipedia')
    });

    it('verify that Wikipedia page has search field', () => {
        cy.get('#searchInput').should('exist')
        cy.get('.pure-button').should('exist')
    });

    it('verify that user can input in the search field', () => {
        cy.get('#searchInput').type('Apollo')
    });

    it('verify that user can open the article', () => {
        cy.get('#searchInput').type('Apollo')
        cy.get('.pure-button').click();
        cy.url().should('be.equal','https://en.wikipedia.org/wiki/Apollo')

    });
})