import './DriverCard.css'
const DriverCard = props => {
    const { name, rating, img, car } = props

    const divStyle = {
        backgroundColor: 'purple',
        color: 'white',
        padding: '50px',
        borderRadius: '5px',
        marginBottom:'10px'
    
    }
    return (
        <div className="DriverCard" style={divStyle}>
                        <img src={img} />
                        <p><strong>Name: </strong> {name}</p>
                          <p><strong>Rating:</strong> {'★'.repeat(rating) + '☆'.repeat(5-rating) }</p>
            <p><strong>Car Model: </strong> {car.model}</p>
            <p><strong>License:</strong> {car.licensePlate}</p>
                        </div>
                
    )
}

export default DriverCard