import './styles/DriverCard.css'

export default function DriverCard({name, rating, img, car}){

    let stars = Math.round(rating);
    let ratingStr = "";

    switch(stars){
        case 1:
            ratingStr = "★☆☆☆☆";
            break;
        case 2:
            ratingStr = "★★☆☆☆";
            break;
        case 3:
            ratingStr = "★★★☆☆";
            break;
        case 4:
            ratingStr = "★★★★☆";
            break;
        case 5:
            ratingStr = "★★★★★";
            break;
        default:
            ratingStr = "☆☆☆☆☆"; 
            break;
    }

    return(
        <div className="driverCard">
            <img src={img} alt="cardImg"/>
            <div>
                <h2>{name}</h2>
                <span className="driverRatingContainer">{ratingStr}</span>
                <span>{car.model} {"-"} {car.licensePlate}</span>
            </div>
        </div>
    )
}