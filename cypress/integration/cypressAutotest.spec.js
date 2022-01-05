
context('Gstore Test', () => {
  it('Gstore login-test, search-test, order-test', () => {
    cy.fixture('Variables').then(data=>{
       cy.visit(data.main_url)
       cy.get(data.login_btn).click()
       cy.get(data.login_selector).type(data.login)
       cy.get(data.password_selector).type(data.password)
       cy.get(data.login_click).click()   
       cy.wait(data.waiter)
       cy.get(data.search_selector).type(data.search_input)
       cy.get(data.click_search).click() 
       cy.get(data.order_click_selector).click();
       cy.get(data.name_selector).should('have.text', data.expected_name)
       cy.get(data.number_product_selector).should('have.value', data.expected_product_numbers)
    })
  })
})