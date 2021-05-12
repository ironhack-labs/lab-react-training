import Rating from "../rating/Rating"
import './DriverCard.css'


const DriverCard = props => {
    const profilePic = {
        boxSizing: 'border-box',
        height: '90px',
        width: '90px',
        backgroundImage: 'url(' + props.img + ')',
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: '50%'
    }

    return (
        <div className="driver-container">
            <div className="driver">
                <div className="profile-pic" style={profilePic}>
                </div>
                <div className="content">
                    <h3>{props.name}</h3>
                    <Rating>{props.rating}</Rating>
                    <p>{props.car.model} {props.car.licensePlate}</p>
                </div>
            </div>
        </div>
    )
}

export default DriverCard;