function DriverCard({name, rating, img, car}) {

    const genStars = (num) => {
        switch (Math.floor(num)) {
            case 0:
                return <><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i
                    class="far fa-star"></i><i class="far fa-star"></i></>;
            case 1:
                return <><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i
                    class="far fa-star"></i><i class="far fa-star"></i></>;
            case 2:
                return <><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i
                    class="far fa-star"></i><i class="far fa-star"></i></>;
            case 3:
                return <><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="far fa-star"></i><i class="far fa-star"></i></>;
            case 4:
                return <><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="far fa-star"></i></>;
            case 5:
                return <><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                    class="fas fa-star"></i><i class="fas fa-star"></i></>;
            default:
                return <><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i
                    class="far fa-star"></i><i class="far fa-star"></i></>;
        }
    }

    return (
        <div className="driver-card">
            <img src={img}/>
            <div className="driver-info">
                <span>{name}</span>
                <div className="rating"> {genStars(rating)}</div>
                <span>{car.model} - {car.licensePlate}</span>
            </div>

        </div>

    );
}

export default DriverCard;