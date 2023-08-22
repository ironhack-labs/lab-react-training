const Random = ({ min, max }) => {

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

    return (
        <>
            <div>
                <p>Random number between {min} and {max}: {randomNumber}</p>
            </div>
        </>

    )
}

export default Random 