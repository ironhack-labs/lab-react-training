import Rating from "../Rating/Rating"

function DriverCard({name, rating, img, car}) {
    const { model, licensePlate } = car
    return (
        <div>
            <img src={ img } alt={ name }/>
            <p>{ name }</p>
            <Rating>{ rating }</Rating>
            <p>{ model } - { licensePlate }</p>
        </div>
    )
}

export default DriverCard