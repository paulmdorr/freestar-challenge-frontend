'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createGame, hit, hold } from './actions';
import Player from '@/components/Player';
import Button from '@/components/Button';

const PlayersContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export default function Home() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    createGame('Alice').then((data) => {
      setGame(data.game);
    });
  }, []);

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
    <main>
      <h1>Blackjack</h1>
      {game ? (
        <PlayersContainer>
          <Player name={game.dealer.name} hand={game.dealer.hand} />
          <Player name={game.player.name} hand={game.player.hand} />
          <div>
            <Button
              onClick={() => holdAndSetState(game.player.name)}
              color="hsla(4, 100%, 64%, 1)"
            >
              Hold
            </Button>
            <Button
              onClick={() => hitAndSetState(game.player.name)}
              color="hsla(142, 100%, 49%, 1)"
            >
              Hit
            </Button>
          </div>
        </PlayersContainer>
      ) : (
        'loading...'
      )}
    </main>
  );
}
