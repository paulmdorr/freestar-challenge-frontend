import Image from 'next/image';

function Card({ rank, suit }) {
  return (
    <div>
      <Image
        src={`/cards/fronts/${suit}_${rank}.svg`}
        alt={`${rank} of ${suit}`}
        width={234}
        height={333}
        priority
      />
    </div>
  );
}

export default Card;
