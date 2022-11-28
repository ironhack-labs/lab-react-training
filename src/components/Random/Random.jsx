function Random(props) {
    const { min, max } = props

    return (
        <h3 >Random value between {min} and {max} = {Math.floor(Math.random() * (max - min + 1)) + min}</h3>

    )
}
export default Random