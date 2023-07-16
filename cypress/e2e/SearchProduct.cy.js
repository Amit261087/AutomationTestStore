describe('Search Product', function(){

    it('Search Product', function(){
        cy.visit('https://automationteststore.com/');
        cy.get('#filter_keyword').type('Stick').type('{enter}')
        cy.get('.prdocutname').each(($el, index, $list)=>{
            cy.log($el.text())
            cy.get('.prdocutname').should('contain', 'stick')
        })
    })
})