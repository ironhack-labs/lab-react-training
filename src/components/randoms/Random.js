function Random({min, max}) {

    return (
        <div className="card text-start">
        <div className="card-body">
            <div>Random value between {min} and {max} => {Math.floor(Math.random() * (max - min + 1) + min)} </div>
        </div>
    </div>

    )
}

export default Random