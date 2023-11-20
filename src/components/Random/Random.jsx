const Random = ({ min, max }) => {
    const result = Math.round(Math.random() * (max - min) + min)
    return (
        <h2>Random value between {min} and {max} is {result}</h2>
    )
}

export default Random