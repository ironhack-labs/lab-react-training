import '../styles/Random.css'

function Random(props) {
    return (
        <div className='Random'>
            <p>Random value between {props.min.toString()} and {props.max.toString()} => {Math.floor(Math.random()*(props.max - props.min) + props.min)}</p>
        </div>
    )
}

export default Random