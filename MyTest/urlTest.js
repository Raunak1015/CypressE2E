    describe('Launch my App',()=>{
        it('app Testing',()=>{
            cy.visit('https://www.freshworks.com/');
            cy.contains('Platform')
            cy.contains('Platform').click();
            cy.url().should('include','/platform')
        })
    })