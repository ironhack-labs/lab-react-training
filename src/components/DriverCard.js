import Rating from "./Rating";

function DriverCard(props) {


    return (
        <>
            <article>
                <img src={props.img} />
                <p>{props.name}</p>
                <p>{props.rating}</p>
                <p>{props.car.model}</p>
                <p>{props.licensePlate}</p>
            </article>
        </>

    );
}

export default DriverCard;