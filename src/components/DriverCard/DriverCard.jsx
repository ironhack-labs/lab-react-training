
import DriverCardImage from "../DriverCardImage/DriverCardImage";
import DriverCardInfo from "../DriverCardInfo/DriverCardInfo";
import "./DriverCard.css"

function DriverCard({ driverInfo }) {
    const { name, rating, img, car, } = driverInfo
    return (
        <div className="DriverCardContainer">
            <DriverCardImage img={img} name={name} />
            <DriverCardInfo name={name} car={car} rating={rating} />

        </div>

    )
}

export default DriverCard;
