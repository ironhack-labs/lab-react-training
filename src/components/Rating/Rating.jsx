import "./Rating.css";

function Rating({children}) {
    return (
        <div className="borderRating">
            <span>
                {Math.round(children) >= 1 ? <i className="fa fa-star" aria-hidden="true"></i> : <i className="fa fa-star-o" aria-hidden="true"></i>}
                {Math.round(children) >= 2 ? <i className="fa fa-star" aria-hidden="true"></i> : <i className="fa fa-star-o" aria-hidden="true"></i>}
                {Math.round(children) >= 3 ? <i className="fa fa-star" aria-hidden="true"></i> : <i className="fa fa-star-o" aria-hidden="true"></i>}
                {Math.round(children) >= 4 ? <i className="fa fa-star" aria-hidden="true"></i> : <i className="fa fa-star-o" aria-hidden="true"></i>}
                {Math.round(children) >= 5 ? <i className="fa fa-star" aria-hidden="true"></i> : <i className="fa fa-star-o" aria-hidden="true"></i>}
                {children}
            </span>
        </div>
    )
}


export default Rating;