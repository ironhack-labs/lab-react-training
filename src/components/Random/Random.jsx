import './Random.css'

const Random = ({ min, max }) => {
    const number = Math.floor(Math.random() * (max - min) + min)

    return (
        <p className='random'>Random value between {min} and {max} ={'>'} {number} </p>

    )

}

export default Random