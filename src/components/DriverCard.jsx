import Rating from "./Rating";

function DriverCard(props) {
  const { name, rating, img, car } = props

return (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: '10px',
    margin: '5px',
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center'
    }}>
      <div>
        <img src={img} alt="driver img" style={{borderRadius:'50%', height: '100px'}} />
      </div>

      <div style={{
        color: 'white',
        display:'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginLeft: '5px',
      }}>
        <h4 style={{margin: '0px'}}>{name}</h4>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  </div>
  )
}




export default DriverCard;