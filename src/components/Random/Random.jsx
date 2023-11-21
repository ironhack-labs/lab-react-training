import './Random.css'

const Random = ({ min, max }) => {

    const str = '=>'

    return (
        <p className='randomText'>Random number between {min} and {max} {str} {Math.floor(Math.random() * (max - min) + min)}</p>
    )

}

export default Random