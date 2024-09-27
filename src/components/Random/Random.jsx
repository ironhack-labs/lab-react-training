import './Random.css'
const Random = ({ randomInfo }) => {
    const { min, max } = randomInfo
    const randomValue = Math.floor(Math.random() * (max - min) + min)
    return (
        <div className='randomValue'>
            <p> Random value between {min} and {max} = {randomValue}</p>
        </div >
    )

}

export default Random