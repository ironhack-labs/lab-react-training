import Rating from "./Rating";

const DriverCard = (props) => {
    return(
        <div className="driver-card">
            <div>
                <img src={props.img} alt="profile-img" style={{ borderRadius: '50%' }} />
            </div>

            <div className="driver-info">
                <p>{props.name}</p>
                <Rating 
            </div>
        </div>
    )
}

export default DriverCard;
