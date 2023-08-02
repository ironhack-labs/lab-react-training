import "./IdCard.css"

const IdCard = (props) => {

    return (
                    <div className="main">
                        <div>
                            <img src={props.picture}/>
                        </div>
                        <div>
                            <div className="container">
                                <h5>First name: </h5> <span>{props.firstName}</span>
                            </div>
                            <div className="container">
                            <h5>Last name: </h5> <span>{props.lastName}</span>
                            </div>
                            <div className="container">
                            <h5>Gender: </h5> <span>{props.gender}</span>
                            </div>
                            <div className="container">
                            <h5>Height: </h5> <span>{props.height}</span>
                            </div>
                            <div className="container">
                            <h5>Birth: </h5> <span>{props.birth}</span>
                            </div>
                        </div>
                </div>
 
    )}

export default IdCard;