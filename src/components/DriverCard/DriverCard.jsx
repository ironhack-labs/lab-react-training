import Rating from "../Rating/Rating"

const driverCard = ({ driverInfo }) => {
    const { name, rating, img, car } = driverInfo

    return (
        <div className="driverCard">
            <img src={img} alt="profil-photo" />
            <Rating>{rating}</Rating>
            <h4>{name}</h4>
            <p>{car[0].model}-{car[0].licensePlate}</p>
        </div>
    )
}

export default driverCard