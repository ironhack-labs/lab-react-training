import "./Driver.css"
import Rating from "./Rating";



const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <div id="driver-img">
        <img src={img} alt="driver-pic" />
      </div>

      <div id="driver-information">
        {name}
        <Rating rate = {rating}/>
        {car}
      </div>
    </div>
  );
};

export default DriverCard;