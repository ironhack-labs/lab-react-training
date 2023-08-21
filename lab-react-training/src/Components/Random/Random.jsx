const Random = ({ min, max }) => {
    const between = Math.floor(Math.random() * (max - min + 1) + min)
    return (
        <p>Random value between {min} and {max} is {between}</p>
    )
}

export default Random