import Image from 'next/image';
import { memo } from 'react';
import styled from 'styled-components';

const CARDS_ASPECT_RATIO = 234 / 333;
const SMALL_CARD_HEIGHT = 170;

function Card({ rank, suit, tilt = false, facedown = false }) {
  const CardContainer = styled.div`
    transform: rotate(${tilt ? getRandomTilt() : 0}deg);
    height: ${SMALL_CARD_HEIGHT}px;
    width: ${SMALL_CARD_HEIGHT * CARDS_ASPECT_RATIO}px;
  `;

  return (
    <CardContainer>
      <Image
        src={getImagePath(rank, suit, facedown)}
        alt={getImageAlt(rank, suit, facedown)}
        fill
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

export default memo(Card);
export { CARDS_ASPECT_RATIO, SMALL_CARD_HEIGHT };
