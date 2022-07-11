import './Random.css'

const Random = ({ min, max, children }) => {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min)
    return (
        <p className='random'>Random value between {min} and {max} => {randomNum}</p>
    )
}

export default Random