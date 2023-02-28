import './../Random/Random.css'

function Random({ min, max }) {

    min = Math.ceil(min)
    max = Math.floor(max)
    const rand = Math.floor(Math.random() * (max - min + 1) + min)
    return (
        <div className='Random'>
            <p>Random vale between {min} and {max} => {rand}</p>
        </div>
    )


}

export default Random