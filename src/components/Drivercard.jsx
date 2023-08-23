import Rating from "./Rating";

function DriverCard(props){
    const {name, rating, img, car} = props;
    const {model, licensePlate} = car;

    return(
        <div>
            <img src={img} alt="Driver img" />
            <h3>{name}</h3>
            <Rating>{rating}</Rating>
            <div>
                <h5>{model} - {licensePlate}</h5>
            </div>
        </div>
    )
}

export default DriverCard