function Random({max,min}){
    let random=Math.floor(Math.random()*max+min);
    return(
        <div>
       <p>Random value between {min} and {max} is {random}</p>
    
    </div>
    )
}
export default Random;