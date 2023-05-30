/*describe('Registration Test', () => {
  it('Should register a new user', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login');
    cy.get('[title = "Continue"]').click();
    cy.get('#AccountFrm_firstname').type('test').should('have.value', 'test');
    cy.get('#AccountFrm_lastname').type('user').should('have.value', 'user');;
    cy.get('#AccountFrm_email').type('12332156@gmail.com').should('have.value', '12332156@gmail.com');;
    cy.get('#AccountFrm_telephone').type('5555545').should('have.value', '5555545');
    cy.get('#AccountFrm_fax').type('-').should('have.value', '-');
    cy.get('#AccountFrm_company').type('TestTest').should('have.value', 'TestTest');
    cy.get('#AccountFrm_address_1').type('Etimesgut').should('have.value', 'Etimesgut');
    cy.get('#AccountFrm_address_2').type('1438 cadde Izoser').should('have.value', '1438 cadde Izoser');
    cy.get('#AccountFrm_city').type('Ankara').should('have.value', 'Ankara');
    cy.get('[name="country_id"]').select('215');
    cy.get('#AccountFrm_postcode').type('101010').should('have.value', '101010');
    cy.get('[name="zone_id"]').select('3321');
    cy.get('#AccountFrm_loginname').type('Busin1').should('have.value', 'Busin1');
    cy.get('#AccountFrm_password').type('123456Busin').should('have.value', '123456Busin');
    cy.get('#AccountFrm_confirm').type('123456Busin').should('have.value', '123456Busin');
    cy.get("[type='checkbox']").check();
    cy.get('[title="Continue"]').click();
    // Перевірка 
    cy.contains('Your Account Has Been Created!').should('be.visible');
    cy.url().should('include', '/success');
    
  });
});*/

describe('Login', () => {
  it('Should Login user', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login');
    cy.get('#loginFrm_loginname').type('Busin1').should('have.value', 'Busin1');
    cy.get('#loginFrm_password').type('123456Busin').should('have.value', '123456Busin');
    cy.get('[title = "Login"]').click();
  });
});

