function Random ({min,max}){
 
  
    const rand = Math.floor(Math.random() * (max - min)) + min;
    
    return(
        <div className="gretting">
        <p>Random value between {min} and {max} = {rand}</p>
        </div>
    )

}
export default Random