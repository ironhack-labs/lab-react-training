import './Random.css'

const Random = ({ min, max }) => {

    const getRandomInt = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)

        return Math.floor(Math.random() * (max - min) + min)
    }

    return (

        <h2 className='Random'>Random value between {min} and {max}: {getRandomInt(min, max)}</h2>
    )
}

export default Random