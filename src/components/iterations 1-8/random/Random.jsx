function Random({ min, max }) {
    return (
        <div className="border-dark border p-1 ps-2 m-2 text-start">
            Random value between { min } and { max } ={`>`} {Math.round(Math.random() * (max - min) + min)}
        </div>
    )
}

export default Random;