import Button from './Button';

const StandAndHitButtons = ({ standCallback, hitCallback }) => (
  <div>
    <Button onClick={standCallback} color="hsla(4, 100%, 64%, 1)">
      Stand
    </Button>
    <Button onClick={hitCallback} color="hsla(142, 100%, 49%, 1)">
      Hit
    </Button>
  </div>
);

export default StandAndHitButtons;
