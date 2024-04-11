'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createGame } from './actions';
import Player from '@/components/Player';

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

  return (
    <main>
      <h1>Blackjack</h1>
      {game ? (
        <PlayersContainer>
          <Player name={game.dealer.name} hand={game.dealer.hand} />
          <Player name={game.player.name} hand={game.player.hand} />
        </PlayersContainer>
      ) : (
        'loading...'
      )}
    </main>
  );
}
