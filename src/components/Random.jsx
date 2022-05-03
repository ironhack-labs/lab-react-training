import './Random.css'

const Random = ({min, max}) => {
    const r = Math.floor(Math.random() * (max - min)) + min
    return(
        <div className="random">
                <p>Random value between {min} and {max} =  {r} </p>
        </div>
    )
}

export default Random