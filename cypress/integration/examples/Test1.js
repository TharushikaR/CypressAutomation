describe('My First Test Suite', function() {
    it('My First Test Case', function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      //selenium get hit url in browser, cypress get acts like findElement of selenium
      cy.get('.product').should('have.length',5)
      cy.get('.product:visible').should('have.length',4)
      //parent child chaining
      cy.get('.products').find('.product').should('have.length',4)
      cy.get(':nth-child(3) > .product-action > button').click()
      cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
      //cy.contains('ADD TO CART')
    })

    //it('My Second Test Case', function() {
      //test step
   // })

   // it('My Third Test Case', function() {
      //test step
   // })
  })

  /*describe('My First Test', () => {
    it('Gets, types and asserts', () => {
      cy.visit('https://example.cypress.io')
  
      cy.contains('type').click()
  
      // Should be on a new URL which
      // includes '/commands/actions'
      cy.url().should('include', '/commands/actions')
  
      // Get an input, type into it
      cy.get('.action-email').type('fake@email.com')
  
      //  Verify that the value has been updated
      cy.get('.action-email').should('have.value', 'fake@email.com')
    })
  })*/

  /*describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })*/