import './Random.css'

const Random = ({ min, max }) => {
    const radonNumb = parseInt(Math.random() * (max - min) + min)

    return (
        <p className='number'>Random Value between {min} and {max}= {radonNumb}</p>
    )

}

export default Random
