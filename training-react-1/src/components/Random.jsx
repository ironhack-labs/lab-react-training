const Random = ({ min, max }) => {

    let NumberRandom = Math.random() * (max - min) + min // --> Getting a random number between two values

    return (
        <p>Random value between {min} and {max} = {NumberRandom}</p>
    )
}

export default Random