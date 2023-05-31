function DriverCard(props){
    let {name, rating, img, car} = props
    rating = Math.round(rating)
    return (
        <div className="card diverCard">
            <div className="cardBody">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <img src={img} alt="driver"  />
                    </div>
                    <div className="col-4">
                        <h3>{name}</h3>
                        <h3>{[...Array(5)].map((item, index) => index < rating ? "★" : "☆")}</h3>
                        <p>
                            {car.model} - {car.licensePlate}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DriverCard