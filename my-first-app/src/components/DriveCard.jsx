import Rating from "./Rating"

const DriverCard = ({ name, rating, img, car }) => {

    const { model, licensePlace } = car


    return (
        <>
            <p>{name}</p>
            <Rating>

                {rating}
            </Rating>

            <img src={img} style={{ width: '20%' }}></img>
            <p>{model}</p>
            <p>{licensePlace}</p>
        </>

    )
}

export default DriverCard