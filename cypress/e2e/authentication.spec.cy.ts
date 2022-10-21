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
  it('Should Firsntame input is invalid', () => {
    cy.visit('/login');
    cy.url().should('include', 'login');
    cy.get('a').click();
    cy.get('[formControlName="email"]').type('toto@gmail.com');
    cy.get('[formControlName="password"]').type('123456789');
    cy.get('[formControlName="firstname"]').should('have.value', '');
    cy.get('[formControlName="lastname"]').type('toto');
    cy.get('button').should('be.disabled');
  });

  it('Should Lastname input is invalid', () => {
    cy.visit('/login');
    cy.url().should('include', 'login');
    cy.get('a').click();
    cy.get('[formControlName="email"]').type('toto@gmail.com');
    cy.get('[formControlName="password"]').type('123456789');
    cy.get('[formControlName="firstname"]').type('toto');
    cy.get('[formControlName="lastname"]').should('have.value', '');
    cy.get('button').should('be.disabled');
  });

  it('Should register form is invalid after set values in login form before', () => {
    cy.visit('/login');
    cy.url().should('include', 'login');
    cy.get('[formControlName="email"]').type('toto@gmail.com');
    cy.get('[formControlName="password"]').type('123456789');
    cy.get('a').click();
    cy.get('[formControlName="email"]').type('toto@gmail.com');
    cy.get('[formControlName="password"]').type('123456789');
    cy.get('[formControlName="firstname"]').type('toto');
    cy.get('[formControlName="lastname"]').type('toto');
    cy.get('button').click();
  });

  it('Should go register form, write values and back to login form & submit', () => {
    cy.visit('/login');
    cy.url().should('include', 'login');
    cy.get('a').click();
    cy.get('[formControlName="email"]').type('toto@gmail.com');
    cy.get('[formControlName="password"]').type('123456789');
    cy.get('[formControlName="firstname"]').type('toto');
    cy.get('[formControlName="lastname"]').should('have.value', '');
    cy.get('a').click();
    cy.get('[formControlName="email"]').type('toto@gmail.com');
    cy.get('[formControlName="password"]').type('123456789');
    cy.login('toto@gmail.com', '123456789');
  });

  it('Should login & logout', () => {
    cy.visit('/login');
    cy.url().should('include', 'login');
    cy.login('toto@gmail.com', '123456789');
    cy.get('button').should('have.class', 'logout').click();
    cy.url().should('include', 'login');
  });
});
