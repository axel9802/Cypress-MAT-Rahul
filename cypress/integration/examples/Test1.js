describe('My first Test Suite', () => {
    it('My first test case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product:visible').should('have.length',4); // :visible sirve para que solo tome en cuenta elementos visibles. En este caso que la lista de .product sea 4 visibles
        
    });
});


