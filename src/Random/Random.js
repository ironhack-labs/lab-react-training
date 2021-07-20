import './random.css'



function Random ({min, max}){
    console.log(Number(min+max))
    const random = Math.floor(Math.random() * (max - min)) + min
    return(
        <div className = 'container'>
           <p>Random value between {min} and {max} => {random}</p>    
        </div>
    )
}

export default Random