const Random = ({ min, max }) => {

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return (
        <p>Random value between {min} and {max} is {randomNumber}</p>
    )
}

export default Random