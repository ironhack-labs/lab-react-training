const Random = ({ min, max }) => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    return (
        <h1>Random value between {min} and {getRandomInt(max)}</h1>
    )
}

export default Random