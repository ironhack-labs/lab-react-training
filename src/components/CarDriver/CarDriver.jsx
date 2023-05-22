import './CarDriver.css'

const CarDriver = ({ carData }) => {
    const { model, licensePlate } = carData

    return (
        <p>{model} - {licensePlate}</p>
    )

}

export default CarDriver