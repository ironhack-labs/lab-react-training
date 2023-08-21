import './Random.css'

const Random = ({ min, max }) => {

    const result = Math.floor(Math.random() * (min - max) + max)

    return (<div className='random'>
        <h3>Random value between {min} and {max} => {result}</h3>
    </div >)


}

export default Random