
const Random = props => {
    const { max, min } = props
    const random = Math.floor(Math.random() * (max - min) + min)

    return (
        <p>Random value between {min} and {max} - {random}</p>
    )

}

    export default Random;