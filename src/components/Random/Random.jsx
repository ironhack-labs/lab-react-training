import './Random.css'

const Random = ({ min, max }) => {

    let randomNum = Math.floor(Math.random() * (max - min) + min)

    return <p className='Random'><b>Random value between {min} and {max} = {randomNum}</b></p>
}

export default Random