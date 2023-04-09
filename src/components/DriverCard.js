

function DriverCard(props) {

    const { name, rating, img, car, createStars } = props

    return (
        <div className="card container p-5 mb-4" style={{width: 800, backgroundColor:'skyblue',color:'white'}}>
            <div className="row">
                <div className="col-md-4"><img style={{ width: 200, height: 200, borderRadius: 100 }} src={img} /></div>
                <div className="col-md-6 mt-5">
                    <h3>{name}</h3>
                    <h1>{createStars(rating)}</h1>
                    <h5>{car.model} - <span>{car.licensePlate}</span></h5>
                </div>
            </div>
        </div>

    )
}
export default DriverCard;