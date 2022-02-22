const DriverCard = ({ name, rating, img, car }) => {

    const stars = () => {
        const score = Math.round(rating);
        let result = '';

        for (let i = 0; i < 5; i++) {
            if (i < score) {
                result += '★';
            } else result += '☆';
        }
        return result;

    }

    return (
        <div>
            <p>{name}</p>
            <p> {stars()}</p>
            <img style={{ width: "100px" }} src={img} alt={name}></img>
            <p>{car.model} - {car.licensePlate}</p>
        </div>
    )
};

export default DriverCard;