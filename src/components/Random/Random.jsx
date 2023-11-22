const Random = ({ min, max }) => {
    const random = Math.floor(Math.random() * (Number(max) - Number(min)) + Number(min))
    return (
        <>
            <p>Random number between {Number(min)} and {Number(max)} = {random}</p>
        </>
    )
}

export default Random