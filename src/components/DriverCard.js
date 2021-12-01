import './DriverCard.css';

const DriverCard =(props)=>{
    const {name, rating, img, car} = props
    let rate = Math.round(rating)
    return(
        <div className="DriverCard">
            {/* <div className="imgDriver"> */}
                <img className="imgDriver" src={img} alt="ImgDriver" />
            {/* </div> */}
            <div className="textDriver">
                <p className="nameDriver"><b>{name}</b></p>
                <p className="ratingDriver">{'★'.repeat(rate) + '☆'.repeat(5 - rate)}</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )

}

export default DriverCard