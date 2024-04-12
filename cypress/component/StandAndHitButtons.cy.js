import StandAndHitButtons from '../../src/components/StandAndHitButtons.js';

describe('StandAndHitButtons.cy.js', () => {
  it('can create StandAndHitButtons', () => {
    const standCallback = cy.stub().as('stand');
    const hitCallback = cy.stub().as('hit');

    cy.mount(
      <StandAndHitButtons
        standCallback={standCallback}
        hitCallback={hitCallback}
      />,
    );
    cy.get('button').should('have.length', 2);
    cy.get('button').first().should('have.text', 'Stand');
    cy.get('button').last().should('have.text', 'Hit');
    cy.get('button').first().click();
    cy.get('button').last().click();
    cy.get('@stand').should('have.been.called');
    cy.get('@hit').should('have.been.called');
  });
});
