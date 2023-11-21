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
        <div className="credi2" style={tarjetita} >
            <p className="margb"> <img src={img} alt={name} width="100" height="80" /> <span >{name}</span> </p>
            <Rating>{rating}</Rating>
            <p>{model} - {licensePlate}</p>

        </div>
    )
}

export default DriverCard