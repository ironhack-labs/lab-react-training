import './Random.css'

const Random = (props) => {
    let random = Math.round(Math.random() *  (props.max - props.min) + props.min)
    return(
        <div className='Random'>
        <p>{`Random value between ${props.min} and ${props.max} => ${random}`}</p>
        </div>
    )

}


export default Random