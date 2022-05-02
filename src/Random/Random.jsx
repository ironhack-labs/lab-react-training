import './Random.css'

const Random = ({ min, max }) => {

    function getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min) + 1
    }

    return (
        <div className='random'>
            <p>Random value between {min} and {max} = {getRandom(min, max)}</p>
        </div>
    )
}

export default Random