import './Random.css'

const Random = ({ min, max }) => {
    return (
        <article className='random'>
            <p>Random value between {min} and {max} => {Math.floor(Math.random() * (max - min + 1) + min)}</p>
        </article>
    )

}

export default Random