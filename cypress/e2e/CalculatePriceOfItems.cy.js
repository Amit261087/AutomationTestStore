describe('Calculate Price', () => {

    it('Price of Items', () => {
        cy.visit('https://automationteststore.com/');    
        var itemPriceTotal = 0;
        var saleItemPriceTotal = 0;
        var totalPrice = 0;

        cy.get('.thumbnail').should('be.visible').as('products');
        cy.get('@products').find('.oneprice').invoke('text').as('priceNonSaleItem');
        cy.get('@products').find('.pricenew').invoke('text').as('priceSaleItem');

        cy.get('@priceNonSaleItem').then($linktext=>{
            var i;        
            var itemPrice = $linktext.split('$')
            for(i=0; i < itemPrice.length; i++){
                //cy.log(itemPrice[i])
                itemPriceTotal += Number(itemPrice[i])
            }
            totalPrice += itemPriceTotal
            cy.log('Total Price of Non Sale Items: '+itemPriceTotal)
        })

        cy.get('@priceSaleItem').then($linktext=>{
            var i;
            var saleItemPrice = $linktext.split('$')
            for(i=0; i < saleItemPrice.length; i++){
                //cy.log(itemPrice[i])
                saleItemPriceTotal += Number(saleItemPrice[i])
            }
            totalPrice += saleItemPriceTotal
            cy.log('Total Price of Sale Items: '+saleItemPriceTotal)
        })
        .then(()=>{
            cy.log(totalPrice)
        })
    });    
});