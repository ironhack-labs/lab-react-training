const Random = ({ min, max }) => {

    const getRandom = (min, max) => {

        return Math.floor(Math.random() * (max - min) + min)
    }
    return (
        <>
            <p>Random value between {min} and {max} - {getRandom(min, max)}</p>
        </>
    )
}

export default Random