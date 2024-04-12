import HoldAndHitButtons from '../../src/components/HoldAndHitButtons.js';

describe('HoldAndHitButtons.cy.js', () => {
  it('can create HoldAndHitButtons', () => {
    const holdCallback = cy.stub().as('hold');
    const hitCallback = cy.stub().as('hit');

    cy.mount(
      <HoldAndHitButtons
        holdCallback={holdCallback}
        hitCallback={hitCallback}
      />,
    );
    cy.get('button').should('have.length', 2);
    cy.get('button').first().should('have.text', 'Hold');
    cy.get('button').last().should('have.text', 'Hit');
    cy.get('button').first().click();
    cy.get('button').last().click();
    cy.get('@hold').should('have.been.called');
    cy.get('@hit').should('have.been.called');
  });
});
