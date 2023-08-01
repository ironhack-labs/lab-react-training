import { AiOutlineStar } from 'react-icons/ai';
import { BsFillStarFill } from 'react-icons/bs';

function DriverCard({ car, name, rating, img }) {
  const numberRound = Math.round(rating);

  return (
    <div
      style={{
        backgroundColor: 'blue',
        height: '200px',
        width: '400px',
        border: '3px, solid, grey',
        display: 'flex',
        padding: '20px',
        margin: '10px',
        color: 'white',
        borderRadius: '5px',
      }}
    >
      <img
        src={img}
        style={{ width: '100px', height: '100px', borderRadius: '50px' }}
        alt={name}
      />
      <div
        style={{
          padding: '20px',
        }}
      >
        <h4>{name}</h4>
        <br />
        {[1, 2, 3, 4, 5].map((value) =>
          numberRound >= value ? (
            <BsFillStarFill key={value} />
          ) : (
            <AiOutlineStar key={value} />
          )
        )}
        <br />
        <>{car.model}</> - <>{car.licensePlate}</>
      </div>
    </div>
  );
}

export default DriverCard;
