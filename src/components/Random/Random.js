import './Random.css'

const Random = (props) => {
    const randomize = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <div className="random container">
            <p>Random value between {props.min} and {props.max} => {randomize(props.min, props.max)}</p>
        </div>
    )
}

export default Random;