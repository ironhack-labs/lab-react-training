function Random ({max,min}) {
    

    return (

  <div className = "random">

    {parseInt(Math.floor(Math.random() * (max - min) + min))} 


  </div>

    )

    
}

export default Random;