import Image from 'next/image';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: inline-block;
  transform: rotate(${({ tiltDegrees }) => tiltDegrees}deg);
  margin: 0.5rem;
`;

function Card({ rank, suit, tilt = false }) {
  return (
    <CardContainer tiltDegrees={tilt ? getRandomTilt() : 0}>
      <Image
        src={`/cards/fronts/${suit}_${rank}.svg`}
        alt={`${rank} of ${suit}`}
        width={234}
        height={333}
        priority
      />
    </CardContainer>
  );
}

function getRandomTilt() {
  return Math.floor(Math.random() * 7) - 3;
}

export default Card;
