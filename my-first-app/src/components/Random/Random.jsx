const Random = ({ min, max }) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return (
        <div>
            <h4>Random number between {min} and {max}: {randomNumber}</h4>
        </div>
    )
}

export default Random
