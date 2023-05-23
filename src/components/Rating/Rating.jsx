
const Rating = ({ children }) => {

    return (
        <div>
            {Math.ceil(children) === 0 && <p><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i></p>}
            {Math.ceil(children) === 1 && <p><i className="bi bi-star-fill"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i></p>}
            {Math.ceil(children) === 2 && <p><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i></p>}
            {Math.ceil(children) === 3 && <p><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i><i className="bi bi-star"></i></p>}
            {Math.ceil(children) === 4 && <p><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i></p>}
            {Math.ceil(children) === 5 && <p><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></p>}
        </div>
    )
}

export default Rating