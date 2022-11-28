import './Random.css'

const Random = props => {

    const { min, max } = props
    const index = Math.floor(Math.random() * (max - min)) + min

    return (
        <div className='random'>
            Random value between {min} and {max} {index}
        </div>)

}

export default Random