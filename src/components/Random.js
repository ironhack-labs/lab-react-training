const Random = (props) => {

    const { min, max } = props

    const random = Math.floor(Math.random() * (max - min)) + min;

    return <p>Random value between {min} and {max} = {random}</p>
}

export default Random;