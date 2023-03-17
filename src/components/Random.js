function Random({ min, max }){
    return(
        <div className="Random">

        {parseInt(Math.floor(Math.random() * (max - min) + min))} 

        </div>
   
    )
}

export default Random