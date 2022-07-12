import './Random.css'


const Random = ({min, max}) =>{

    return(
        <article className='random'>

            <h3>Random value between {min} and {max} => 
                {Math.floor(Math.random() * (max - min) + min)}
            </h3>                

        </article>
    )
}

export default Random