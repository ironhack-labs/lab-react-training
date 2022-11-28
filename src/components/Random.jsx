const Random = props => {
    const { min, max } = props
    return (

        <p className="Random">Random value between {min} and {max} = {Math.floor(Math.random() * (max - min) + min)}</p>
    )
}

export default Random