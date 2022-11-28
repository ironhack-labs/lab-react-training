import './Random.css'

const Random = props => {


    const { min, max } = props

    let result = Math.floor(Math.random() * (max - min + 1) + min)



    return (
        <div className='Random'>
            <p>{`Random value between ${min} and ${max} => ${result}`}</p>
        </div>
    )
}

export default Random