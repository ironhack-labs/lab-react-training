import "./index.css"


function Rating({children}) {
    let rating = ""
    let emptystars = 5 - Math.round(children)
    
    for(let i = 0; i < Math.round(children); i++) {
        rating += '✪'
    }

    for (let i = 0; i < emptystars; i++){
        rating += '○'
    }

    return (
        <div className="Rating">
            <p>{rating}</p>
        </div>
    );
};

export default Rating;