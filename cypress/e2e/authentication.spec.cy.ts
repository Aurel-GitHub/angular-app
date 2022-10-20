describe('Login', () => {
  it('Should Email input is invalid', () => {
    cy.visit('/login');
    cy.url().should('include', 'login');
    cy.get('[formControlName="email"]').type('qsds');
    cy.get('[formControlName="password"]').type('123456789');
    cy.get('button').should('be.disabled');
  });

  it('Should Password input is invalid', () => {
    cy.visit('/login');
    cy.url().should('include', 'login');
    cy.get('[formControlName="email"]').type('toto@gmail.com');
    cy.get('[formControlName="password"]').type('123');
    cy.get('button').should('be.disabled');
  });

  it('Should login if the form is valid', () => {
    cy.login('doe@gmail.com', 'doe@gmail.com');
    cy.url().should('include', '/');
  });
});

describe('Register', () => {
  // todo - firstname invalid
  // todo - lastname invalid
  // todo - remplir les champs email et password et ensuite se rediriger sur le register form
  // todo -faire passer le test avec toute les bonnes infos
});
