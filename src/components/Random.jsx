const Random = ({ min, max }) => {

    let randomValue = Math.round(min + Math.random() * (max - min))

    return (
        <p>Random value between {min} y {max} = {randomValue}</p>
    )
}

export default Random