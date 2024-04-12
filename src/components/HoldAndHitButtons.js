import Button from './Button';

const HoldAndHitButtons = ({ holdCallback, hitCallback }) => (
  <div>
    <Button onClick={holdCallback} color="hsla(4, 100%, 64%, 1)">
      Hold
    </Button>
    <Button onClick={hitCallback} color="hsla(142, 100%, 49%, 1)">
      Hit
    </Button>
  </div>
);

export default HoldAndHitButtons;
