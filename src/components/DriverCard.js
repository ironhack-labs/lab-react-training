import Rating from './Rating'


const DriverCard = props => {

const {name, rating, img, car} = props


const styleImg = {
 

  width:" 200px",
  borderRadius: "50%"




}

const flexStyle = {
    height: "200px",
    display: "flex",
    justifyContent: "center",
    backgroundColor:  "hsl(227deg 45% 49%)",
    padding: "20px 0px" ,
    borderRadius: "40px",
    color: "white",
    marginBottom: "20px",
    alignItems: "center"
}

    return (<>

<div class="driverLicense" style={flexStyle}>
<div><img src={img} alt="" style={styleImg}></img></div>
 

<div>    {name}
  <Rating>{rating}</Rating>
  {car.model}
  <p>{car.licensePlate}</p></div>
   

  </div>




    </>)
}


export default DriverCard;