import Rating from "./Rating"
const DriverCard = ({
    name,
    rating,
    img,
    car: {
        model,
        licensePlate
    }
}) => {
    const tarjetita = {
        backgroundColor: 'blue',
        marginRadius: '3px',
        padding: '20px'
    }



    return (
        <div style={tarjetita} >
            <p> <img src={img} alt={name} width="80" height="60" /> <span>{name}</span> </p>
            <Rating>{rating}</Rating>
            <p>{model} - {licensePlate}</p>
            <hr />
        </div>
    )
}

export default DriverCard