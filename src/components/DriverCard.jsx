import Rating from "./Rating";

import "./DriverCard.css";

const DriverCard = (props) => {
    const { name, img, rating, car: { model, licensePlate } } = props;
    return(
        <div className="driver">
            <img src={ img } alt="portrait" />
            <div>
                <h2>{ name }</h2>
                <Rating>{ rating }</Rating>
                <span>{ model } - { licensePlate }</span>
            </div>
        </div>
    );
};

export default DriverCard;