import './Random.css'

const Random = ({ min, max }) => { 

    let randomValue = Math.floor(Math.random() * (max - min + 1) + min)
   
    return (
    <article className='card'>
        <h2>Random value between {min} and {max} = {randomValue}</h2>
    </article>
    )
}

export default Random



