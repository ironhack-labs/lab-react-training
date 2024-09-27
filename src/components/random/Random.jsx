function random({ min, max }) {
    return (
        <p>{Math.floor(Math.random() * (max - min + 1)) + min}</p>
    )
}

export default random