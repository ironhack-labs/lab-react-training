
const Random = ({ min, max }) => {  
    return(
        <article className="box">
        <p>Random value between {min} and {max} =  {Math.floor((Math.random() * (max - min) + min))}</p>
        </article>

    )
    
}

export default Random
