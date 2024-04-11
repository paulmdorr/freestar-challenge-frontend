import Card from '../../src/components/Card.js';

describe('Card.cy.js', () => {
  it('playground', () => {
    cy.mount(<Card rank="king" suit="diamonds" />);
    cy.get('img').should('have.attr', 'alt', 'king of diamonds');
  });
});
