import Rating from "../Rating/Rating"

const DriverCard = ({ name, rating, img, car, children }) => {

    return (

        <>
            <div>

                <p>test</p>

                <img src={img} alt={{ name }} style={{ width: '10%', height: '10%' }} />

                <Rating>{rating}</Rating>

                <p> {name} </p>

                <p> {car.model} </p>

                <p> {car.licensePlate} </p>

            </div >
        </>

    )
}

export default DriverCard 