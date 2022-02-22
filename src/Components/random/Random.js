import './Random.css'

const Random = (props) => {

    const { min, max } = props

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * max) + min

    }
    return (

        <p className='random'>Random value between {min} and {max} = {getRandomNumber(min, max)}</p>

    )
}

export default Random