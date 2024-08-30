import Rating from "./Rating";

function DriverCard({ name, rating, img, car }) {
    return ( 
        <div>
    <img 
        src={img} 
        alt={name} 
        style={{
          borderRadius: '50%',
          width: '100px',
          height: '100px',
          objectFit: 'cover',
          marginRight: '20px',
        }}
      />
            <div>
        <h2>{name}</h2>
        <Rating> {rating} </Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
}

export default DriverCard;