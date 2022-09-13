/// <reference types="cypress" />

describe('My first Test Suite', () => {
    it('My first test case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product:visible').should('have.length',4); // :visible sirve para que solo tome en cuenta elementos visibles. En este caso que la lista de .product sea 4 visibles
        
        //Usando Alias
        cy.get('.products').as('productsLocator');
        //Método de encadenamiento padre-hijo
        cy.get('@productsLocator').find('.product').should('have.length', 4);
        //Elegir el segundo producto (empieza desde 0)
        cy.get('@productsLocator').find('.product').eq(1).contains('ADD TO CART').click();
        //each itera entre todos los elementos de la lista de 4 productos
        cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
            //Se crea una constante para almacenar el texto dentro del 'h4.product-name'
            const textVeg = $el.find('h4.product-name').text();
            //Si el texto incluye 'Cashews' entonces que encuentre dentro de la clase .products el botón y le de click
            if (textVeg.includes('Cashews')) {
              cy.wrap($el).find('button').click(); //cy.wrap($el).contains('ADD TO CART').click();
            }
          })
          //Assert para validar que el texto que se muestra es el correcto
          cy.get('.brand').should('have.text', 'GREENKART')

          //Esto no funciona -> Porque text no es comando de cypress sino de Jquery y debe hacerse como abajo (necesita función para ir en orden)
            /* const logo = cy.get('.brand').text();
              console.log(logo); */
          //Esto si funciona -> Primero resuelve la clase y luego almacena el texto en una constante
          cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text()); 
          })







    });
});


