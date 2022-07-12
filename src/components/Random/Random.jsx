import './Random.css'

const Random = ({min, max}) => {

    return (
        <h3 className='randomNum'>Random value between {min} and {max} => {Math.floor(Math.random() * (max - min) + min)}</h3>
    )
}


export default Random