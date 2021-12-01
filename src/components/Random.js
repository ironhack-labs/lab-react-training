import './Random.css'

const Random = (props)=>{
    const {min, max} = props
    const numRandom = Math.floor(Math.random() * (max-min) + min )

    return(
        <div>
            <p className="Random">Random value between {min} and {max} => {numRandom}</p>
        </div>
    )
}

export default Random