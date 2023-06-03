import { AiOutlineStar } from 'react-icons/ai';
import { BsFillStarFill } from 'react-icons/bs';

function DriverCard({ car, name, rating, img }) {
  const numberRound = Math.floor(rating);

  return (
    <div>
      <img
        src={img}
        style={{ width: '100px', height: '100px', borderRadius: '50px' }}
        alt={name}
      ></img>
      <div>
        <>{name}</>
        <br />
        {[1, 2, 3, 4, 5].map((value, index) =>
          numberRound >= index + 1 ? <BsFillStarFill /> : <AiOutlineStar />
        )}
        <br />
        <>{car.model}</> - <>{car.licensePlate}</>
      </div>
    </div>
  );
}

export default DriverCard;
