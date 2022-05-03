import './Random.css'

let Random = ({ min, max }) => {
    let randomValue = Math.floor(Math.random() * (max - min) + min)
    
    return (
        <div className='random'>
            <h2>Random value between {min} and {max} = {randomValue}</h2>
        </div>
    )
}

export default Random