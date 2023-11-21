const Random = (props) => {
    const random = Math.floor(
        Math.random() * (props.max - props.min) + props.min
    )
    return (

        <p>{`Random value between ${props.min} and ${props.max} => ${random}`}</p>

    )
}

export default Random

