import Card from '../../src/components/Card.js';

describe('Card.cy.js', () => {
  it('can create a tilted Card', () => {
    cy.mount(<Card rank="king" suit="diamonds" tilt />);
    cy.get('img').should('have.attr', 'alt', 'king of diamonds');
  });

  it('can create a Card without tilt', () => {
    cy.mount(<Card rank="queen" suit="hearts" />);
    cy.get('img').should('have.attr', 'alt', 'queen of hearts');
  });

  it('can create a face-down Card', () => {
    cy.mount(<Card facedown />);
    cy.get('img').should('have.attr', 'alt', 'facedown card');
  });
});
