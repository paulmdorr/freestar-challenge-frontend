const decideWinner = (game) => {
  if (game.winner === 'dealer') {
    return 'Dealer wins!';
  }

  if (game.winner === 'player') {
    return 'Player wins!';
  }

  return "It's a tie!";
};

export default decideWinner;
