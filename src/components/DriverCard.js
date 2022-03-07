function DriverCard (props) {
   let stars = []
   let rate = Math.round(props.rating.toString())

   for (let i = rate; i > 0; i--) {
        stars.push('estrela')
    }
    
    for (let j = (rate+1); j < 6; j++)
    {
        stars.push (`branco`)
    }

    return (
        <div className="containerDriverCard"> 
            <img src={props.img} alt="profile"/>
            <div className="">
            <h1><strong>{props.name}</strong></h1>
                <section>
                {stars.map((currentStar) => {
                    if (currentStar === "estrela") {
                        return  <span className="star">&#9733;</span>;
                    } 
                    if (currentStar === "branco") {
                        return  <span className="star">&#9734;</span>
                    }             
                 })}
                </section>
            <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
            
        </div>
    )
    
}

export default DriverCard