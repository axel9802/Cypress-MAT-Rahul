/// <reference types="Cypress" />
 
describe('My third Test Suite', () => {
  it('My third test case - Checkboxes', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //Checkboxes
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
    cy.get('input[type="checkbox"]').check(['option2', 'option3']); //En check se ingresan values - options que se desean verificar

    //Static dropdown
    cy.get('select').select('option2').should('have.value', 'option2'); 

    //Dynamic dropdown
    cy.get('#autocomplete').type('Ind');

    cy.get('.ui-menu-item div').each(($el, index, $list) => { //Se busca elemento por elemento y se compara cual es India
      if($el.text()==="India"){
        cy.wrap($el).click();
      }
    })
    cy.get('#autocomplete').should('have.value', 'India');


    //visible - invisible
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
 
    //radio buttons
 
    cy.get('[value="radio2"]').check().should('be.checked')

  })
})