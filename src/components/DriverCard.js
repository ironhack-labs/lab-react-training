import Rating from "./Rating"
import defaultProfile from "../assets/images/blankprofile.png"

const DriverCard = (props) => {
    const {name, rating, img, car:{model, licensePlate}} = props
    let cardDisplay = {
        display: flex,
        'flex-direction': row,
        'justify-content': center,
        'align-items': center,
        'border-radius': '10px',
        'background-color': '#455EB5',
        color: white,
        margin: '10px',
        padding: '40px',
    };

    let cardImage = {
        width : '150px',
        height: '150px',
        'border-radius': '50%'
    };

    let driverInfo = {
        display : flex,
        'flex-direction' : column,
        'text-align' : left,
        'margin-left' : '50px'
    };

    return(
    <div className="ratingCard" style ={cardDisplay}>
        <img style={cardImage}src={img} alt={defaultProfile}/>
        <div className="driverInfo" style={driverInfo}>
            <h2>{name}</h2>
            <Rating>{rating}</Rating>
            <p>{model} - {licensePlate}</p>
        </div>
    </div>
    )
}

export default DriverCard