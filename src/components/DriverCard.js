
function DriverCard({name,rating,img,car}){
    

    const rate = Math.round(rating)
  

    function ranking(rate){
    
    if(rate === 0 ){
      return (
        <p>✰✰✰✰✰</p>
      )
    }
    else if (rate ===1){
      return(
        <p>★✰✰✰✰</p>
      )
    }
    else if (rate ===2){
      return(
        <p>★★✰✰✰</p>
      )
    }
    else if (rate ===3){
      return(
        <p>★★★✰✰</p>
      )
    }
    else if ( rate === 4){
      return(
        <p>★★★★✰</p>
      )
    }
    else if (rate === 5){
      return(
        <p>★★★★★</p>
      )
    }
}
    return(
        <div  className="driverCard">
          <div className="driverCardImg">
            <img src={img}></img>
            </div>
            <div className="divDriverCard">
            <p>{name}</p>
            <p>{ranking(rate)}</p>
            <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>

    )
}

export default DriverCard;