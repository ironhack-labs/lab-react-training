import Rating from './Rating'

function DriverCard(props) {
    return (
        <div className="driver-card">
            <div class="driver-card-body">
                    <img src={props.img}  className="driver-img" alt="Driver"/>
                <div class="driver-info">
                    <p><b>{props.name}</b></p>
                    <Rating>{props.rating}</Rating>
                    <p><small>{props.car.model}&nbsp;-&nbsp;{props.car.licensePlate}</small></p>
                </div>
            </div>
        </div>
    )
  }
   
  export default DriverCard;