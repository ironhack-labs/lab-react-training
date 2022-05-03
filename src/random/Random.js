const Random = ({ min, max }) => {

    return (

        < article >
            <p>{Math.floor(Math.random() * (max - min)) + min}</p>
        </article >
    )
}

export default Random