import Rating from "./Rating"

const DriverCard = ({ name, rating, img, car }) => {

    const { model, licensePlate } = car

    return (

        <>

            <h2>{name}</h2>
            <img src={img} />
            <Rating>{rating}</Rating>
            <div>car :
                {model}
                {licensePlate}

            </div>



        </>


    )

}

export default DriverCard