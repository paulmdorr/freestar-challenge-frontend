import Player from '../../src/components/Player.js';

const playerName = 'Mr. Player';

describe('Player.cy.js', () => {
  it('can create a player with two cards', () => {
    const cards = [
      { rank: 'king', suit: 'diamonds' },
      { rank: 'queen', suit: 'hearts' },
    ];

    cy.mount(<Player name={playerName} hand={cards} />);
    cy.get('h2').should('have.text', playerName);
    cy.get('img').should('have.length', 2);
    cy.get('img').first().should('have.attr', 'alt', 'king of diamonds');
    cy.get('img').last().should('have.attr', 'alt', 'queen of hearts');
  });

  it('can create a player with no cards', () => {
    cy.mount(<Player name={playerName} hand={[]} />);
    cy.get('h2').should('have.text', playerName);
    cy.get('img').should('not.exist');
  });

  it('can create a player with three cards', () => {
    const cards = [
      { rank: 'king', suit: 'diamonds' },
      { rank: 'queen', suit: 'hearts' },
      { rank: 'jack', suit: 'clubs' },
    ];

    cy.mount(<Player name={playerName} hand={cards} />);
    cy.get('h2').should('have.text', playerName);
    cy.get('img').should('have.length', 3);
    cy.get('img').eq(0).should('have.attr', 'alt', 'king of diamonds');
    cy.get('img').eq(1).should('have.attr', 'alt', 'queen of hearts');
    cy.get('img').eq(2).should('have.attr', 'alt', 'jack of clubs');
  });

  it('can create a player with ten cards', () => {
    const cards = [
      { rank: 'king', suit: 'diamonds' },
      { rank: 'queen', suit: 'hearts' },
      { rank: 'jack', suit: 'clubs' },
      { rank: '10', suit: 'spades' },
      { rank: '9', suit: 'diamonds' },
      { rank: '8', suit: 'hearts' },
      { rank: '7', suit: 'clubs' },
      { rank: '6', suit: 'spades' },
      { rank: '5', suit: 'diamonds' },
      { rank: '4', suit: 'hearts' },
    ];

    cy.mount(<Player name={playerName} hand={cards} />);
    cy.get('h2').should('have.text', playerName);
    cy.get('img').should('have.length', 10);
    cy.get('img').each(($img, index) => {
      const card = cards[index];
      expect($img).to.have.attr('alt', `${card.rank} of ${card.suit}`);
    });
  });

  it('can create a player with two cards, one of which is face down', () => {
    const cards = [{ rank: 'king', suit: 'diamonds' }, { facedown: true }];

    cy.mount(<Player name={playerName} hand={cards} />);
    cy.get('h2').should('have.text', playerName);
    cy.get('img').should('have.length', 2);
    cy.get('img').first().should('have.attr', 'alt', 'king of diamonds');
    cy.get('img').last().should('have.attr', 'alt', 'facedown card');
  });
});
