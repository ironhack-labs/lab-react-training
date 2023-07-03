
function DriverCard(props) {

    const roundedNumber = Math.round(props.rating);

    let star = ""
    switch (roundedNumber) {
        case 1:
            star = "★☆☆☆☆";
            break;
        case 2:
            star = "★★☆☆☆";
            break;
        case 3:
            star = "★★★☆☆"
            break;
        case 4:
            star = "★★★★☆"
            break;
        case 5:
           star = "★★★★★"
            break;
        default:
            star = "☆☆☆☆☆"
        }


    

    return (
        <div className="driverCard">
            <div className="photo">
                <img src={props.img} alt={props.firstName}/>

            </div>
            <div className="info">
                <h4>{props.name}</h4>
                <h4>{star}</h4>
                <h4>{props.car.model}{props.car.licensePlate}</h4>
                  

            </div>





        </div>
    )

}
export default DriverCard;