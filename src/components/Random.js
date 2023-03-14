//<Random min={1} max={6}/>
//<Random min={1} max={100}/>

function Random ({max,min}) {


    return (

  <div className = "random">

    {parseInt(Math.floor(Math.random() * (max - min) + min))} 


  </div>

    )


}

export default Random;