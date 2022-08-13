    export class HomePage {

    private inpSearch : string;
    private btnSearch : string;
    private logoWiki : string;

    constructor() {
       this.inpSearch = '#searchInput'
       this.btnSearch = '.pure-button'
       this.logoWiki = 'span[class="central-textlogo__image sprite svg-Wikipedia_wordmark"]'
    }

    public navigateToWiki() {
        let url = Cypress.env('baseUrl');  
        cy.visit(url);
        }

    public inputSearchField(searchText: string) {
        cy.get(this.inpSearch)
        .should('exist')
        .clear()
        .type(searchText)
        }

    public clickSearchButton() {
        cy.get(this.btnSearch)
        .should('exist')
        .click();
        }

    public verifyCorrectPageOpened(path: string ) {
        cy.url()
        .should('include',path)
        }

    public verifyWikiLogoIsVisible() {
            cy.get(this.logoWiki)
            .should('exist')
        }
    }