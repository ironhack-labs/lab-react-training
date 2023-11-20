const Random = ({ min, max }) => {

    return (
        <div>
            <h2>Random value between {min} and {max} =
                {Math.floor(Math.random()
                    * (max - min + 1) + min
                )}</h2>
        </div>
    )
}

export default Random