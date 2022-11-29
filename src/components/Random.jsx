import './Random.css'

const Random = props => {

    const { min, max } = props
    const randomNum = (Math.floor(Math.random() * (max - min) + min))

    return (


        <div className="Random">
            <h1> Random value between {min} and {max} = {randomNum} </h1>
        </div>
    )

}

export default Random
