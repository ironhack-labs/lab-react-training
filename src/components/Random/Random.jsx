import './Random.css'

const Random = ({ min, max }) => {
    const randomNum = Math.floor(Math.random() * max);
    return (
        <div className='Random'>
            <p> Numero random entre {min} y {max} = {randomNum}</p>
        </div>

    )

}

export default Random