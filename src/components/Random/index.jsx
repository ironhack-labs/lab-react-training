import './random.css'

const Random = ({ min, max }) => {
    const radomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return (
        <article className='random'>
            <p>Random value from {min} and {max} ={'>'} {radomNumber}</p>
        </article>
    )
}

export default Random