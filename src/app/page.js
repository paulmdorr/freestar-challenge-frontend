'use client';

import { useState } from 'react';
import { createGame, hit, hold } from './actions';
import Player from '@/components/Player';
import Button from '@/components/Button';
import HoldAndHitButtons from '@/components/HoldAndHitButtons';
import decideWinner from '@/utils/decideWinner';
import { Input, Main, PlayersContainer } from '@/styles/page.styles';

export default function Home() {
  const [game, setGame] = useState(null);
  const [playerName, setPlayerName] = useState('');

  const newGame = (playerName) => {
    if (!playerName || !playerName.trim()) {
      alert('Please enter your name!');

      return;
    }

    createGame(playerName).then((data) => {
      setGame(data.game);
    });
  };

  const hitAndSetState = (playerName) => {
    hit(playerName).then((data) => {
      setGame(data.game);
    });
  };

  const holdAndSetState = (playerName) => {
    hold(playerName).then((data) => {
      setGame(data.game);
    });
  };

  return (
    <Main>
      <h1>Blackjack</h1>
      {game && (
        <PlayersContainer>
          <Player player={game.dealer} />
          <Player player={game.player} />
          <div>
            {game.state === 'gameOver' ? null : (
              <HoldAndHitButtons
                holdCallback={() => holdAndSetState(game.player.name)}
                hitCallback={() => hitAndSetState(game.player.name)}
              />
            )}
          </div>
        </PlayersContainer>
      )}
      {game && game.state === 'gameOver' ? <h2>{decideWinner(game)}</h2> : null}
      {(!game || game.state === 'gameOver') && (
        <>
          <Input
            onChange={(e) => setPlayerName(e.target.value)}
            value={playerName}
          />
          <Button
            onClick={() => newGame(playerName)}
            color="hsla(193, 100%, 43%, 1)"
          >
            New Game
          </Button>
        </>
      )}
    </Main>
  );
}
