import { memo } from 'react';
import Card from './Card';
import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  height: 333px;
  width: ${({ length }) => length * 50 + 234}px;
`;

const CardWrapper = styled.div`
  position: absolute;
  margin-left: ${({ offset }) => offset}px;
`;

function Player({ player: { name, hand, points } }) {
  return (
    <div>
      <h2>{name}</h2>
      <CardsContainer length={hand.length - 1}>
        {hand.map((card, index) => (
          <CardWrapper key={index} offset={index * 50}>
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
