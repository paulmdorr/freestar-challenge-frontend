import { memo } from 'react';
import Card from './Card';
import styled from 'styled-components';
import { SMALL_CARD_HEIGHT, CARDS_ASPECT_RATIO } from './Card';

const CARDS_OFFSET = (CARDS_ASPECT_RATIO * SMALL_CARD_HEIGHT) / 3;

const CardsContainer = styled.div`
  height: ${SMALL_CARD_HEIGHT}px;
  position: relative;
  width: ${({ length }) =>
    SMALL_CARD_HEIGHT * CARDS_ASPECT_RATIO + length * CARDS_OFFSET}px;
`;

const CardWrapper = styled.div`
  position: absolute;
  margin-left: ${({ offset }) => offset}px;
`;

const PlayerName = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  text-transform: capitalize;
`;

function Player({ player: { name, hand, points } }) {
  return (
    <div>
      <PlayerName>{name}</PlayerName>
      <CardsContainer length={hand.length - 1}>
        {hand.map((card, index) => (
          <CardWrapper key={index} offset={index * CARDS_OFFSET}>
            <Card
              rank={card.rank}
              suit={card.suit}
              tilt
              facedown={card.facedown}
            />
          </CardWrapper>
        ))}
      </CardsContainer>
      {points ? <p>{points} points</p> : null}
    </div>
  );
}

export default memo(Player);
