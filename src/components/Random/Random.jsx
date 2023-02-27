const Random = ({ min, max }) => {

    const getRandom = Math.floor(Math.random() * (max - min + 1) + min)

    return (
        <div className="card">
            <p>Random value between {min} and {max} ---&gt; {getRandom} </p>
        </div>
    )
}

export default Random