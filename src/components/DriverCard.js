const DriverCard = ({ name, rating, img, car }) => {

    const circle =  {
        height: "100px",
        width: "100px",
        borderRadius: "50%",
        display: "inline-block"
      }

    const fullStars = Math.round(rating);

   const stars = [];
   for (let i = 1; i <= 5; i++) {
     if (i <= fullStars) {
       stars.push('★');
     
     } else {
       stars.push('☆');
     }
    }

    const container = {
        display: "flex",
        alignItems: "center",
        color: "white",
        backgroundColor: "blue"
    }

    return <div style={container}>
        <div>
        <img src={img} style={circle}></img>
        </div>
        <div>
        <h3>{name}</h3>
        <div>
      {stars.map(star =>  {
         return star
      })}
      </div>
        <p>{car.model} - {car.licensePlate}</p>
        </div>
    </div>
}

export default DriverCard;