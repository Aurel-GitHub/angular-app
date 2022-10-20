import { FormControlName } from '@angular/forms';

describe('login', () => {
  it('Should login if the form is valid', () => {
    cy.login('doe@gmail.com', 'doe@gmail.com');
    cy.url().should('include', '/');
  });
});
