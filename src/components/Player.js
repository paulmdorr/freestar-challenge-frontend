import Card from './Card';
import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
`;

const CardWrapper = styled.div`
  position: absolute;
  margin-left: ${({ offset }) => offset}px;
`;

function Player({ name, hand }) {
  return (
    <div>
      <h2>{name}</h2>
      <CardsContainer>
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
    </div>
  );
}

export default Player;
