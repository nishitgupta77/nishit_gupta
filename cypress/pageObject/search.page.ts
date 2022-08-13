    export class SearchPage {

    private inpSearch : string;
    private btnSearch : string;
    private logoWiki : string;
    private linkPage : string;

    constructor() {
       this.inpSearch = '#ooui-php-1'
       this.btnSearch = '.oo-ui-actionFieldLayout-button > .oo-ui-widget > .oo-ui-inputWidget-input'
       this.logoWiki = '.mw-wiki-logo'
       this.linkPage = ':nth-child(1) > .mw-search-result-heading > a > :nth-child(1)'
    }

    public navigateToWikiSpecialSearch() {
        let url = Cypress.env('searchUrl');  
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

    public clickOnLinkPage() {
        cy.get(this.linkPage)
        .should('exist')
        .click();
    }    

    public verifyWikiLogoIsVisible() {
        cy.get(this.logoWiki)
        .should('exist')
        }
    }