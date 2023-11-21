import './Random.css'
const Random = ({ min, max }) => {
    const number = (Math.random() * (max - min) + min).toFixed(0);
    const str = "=>"
    return (
        <p className='number'>Random value between {min} and {max} {str} {number}</p>
    )
}

export default Random