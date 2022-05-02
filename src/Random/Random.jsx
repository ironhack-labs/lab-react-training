import './Random.css'

const Random = ({ min, max }) => {
    let randomValue = Math.floor(Math.random() * (max - min + 1) + min)


    return (
        <article className='random' >
            <p>Random value between {min} and {max} = {randomValue}</p>
        </article>
    )
}

export default Random