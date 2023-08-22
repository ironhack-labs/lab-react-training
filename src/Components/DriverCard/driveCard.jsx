function DriveCard(props){
    const {name, rating, img} = props;
    return(
        <div>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{rating}</p>
            <p>{props.car.model}</p>
            <p>{props.car.licensePlate}</p>
        </div>
    );
}

export default DriveCard;