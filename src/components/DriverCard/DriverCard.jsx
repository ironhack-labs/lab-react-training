function DriverCard(props) {
    const {name, rating, img, car} = props;
    const roundRating = (rate) => {
        Math.round(rate)
    }
  
    return (
    <div>
        <h4>{name}</h4>
        <h3>{roundRating(rating)}</h3>
    </div>
  )
}

export default DriverCard