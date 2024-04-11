import Image from 'next/image';
import styled from 'styled-components';

const CardContainer = styled.div`
  transform: rotate(${({ tiltDegrees }) => tiltDegrees}deg);
`;

function Card({ rank, suit, tilt = false, facedown = false }) {
  return (
    <CardContainer tiltDegrees={tilt ? getRandomTilt() : 0}>
      <Image
        src={getImagePath(rank, suit, facedown)}
        alt={getImageAlt(rank, suit, facedown)}
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

function getImagePath(rank, suit, facedown) {
  if (facedown) {
    return '/cards/backs/blue.svg';
  }

  return `/cards/fronts/${suit}_${rank}.svg`;
}

function getImageAlt(rank, suit, facedown) {
  if (facedown) {
    return 'facedown card';
  }

  return `${rank} of ${suit}`;
}

export default Card;
