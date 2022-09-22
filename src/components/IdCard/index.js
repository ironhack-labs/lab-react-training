import "./style.css"

function IdCard(props){
    return (
        <div className="card">
            <div className="cardImg"><img src={props.picture}></img></div>
            <div className="cardInfo">
                <span><strong>firstName</strong>{props.firstName}</span>
                <span><strong>lastname</strong>{props.lastname}</span>
                <span><strong>gender</strong>{props.gender}</span>
                <span><strong>height</strong>{props.height}</span>
                <span><strong>birth</strong>{props.birth}</span>
            </div>
        </div>
    )
}

export default IdCard