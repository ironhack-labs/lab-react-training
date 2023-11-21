const Random = ({ min, max }) => {

    let rdNumber = Math.floor(Math.random() * (max - min + 1)) + min

    return (
        <div className="randomi">Random value between {min} and {max} is {rdNumber}</div>
    )
}

export default Random