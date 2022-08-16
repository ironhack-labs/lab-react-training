function DriverCard(props) {
    const {name, rating, img, car} = props;

    const roundRating = (rating) => {
        switch(Math.round(rating)) {
            case 1:
                return '★☆☆☆☆'
                break;
            case 2:
                return '★★☆☆☆';
                break;
            case 3:
                return '★★★☆☆';
                break;
            case 4:
                return '★★★★☆';
                break;
            case 5:
                return '★★★★★';
                break;
            default: 
                return '☆☆☆☆☆'
                break;
        }
        
        
    }
  
    return (
    <div className="driver-card">
        <span className="driver-image-container">
            <img className="driver-image" src={img} alt="" />
        </span>
        <span className="driver-info">
            <h4>{name}</h4>
            <h3>{roundRating(rating)}</h3>
            <p>{car.model} - {car.licensePlate}</p>
        </span>
    </div>
  )
}

export default DriverCard