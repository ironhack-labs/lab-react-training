import './Random.css'

const Random = ({ min, max }) => {

    return(
        <div>
            <div className='card'>
                <p>Random value between {min} and {max} ={Math.floor((Math.random() * (max - min + 1)) + min)}</p>
            </div>
        </div>
    )
}

export default Random