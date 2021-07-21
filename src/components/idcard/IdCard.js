
function IdCard(props) {
    return (
        <div className="IdCard box">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src={props.picture} className="img-fluid" alt="picture" />
                    </div>
                    <div className="col-md-10 ">
                        <div className="card-body">
                            <p className="card-text mb-0"><b>First name:</b> {props.firstName}</p>
                            <p className="card-text mb-0"><b>Last name: </b>{props.lastName}</p>
                            <p className="card-text mb-0"><b>Gender: </b>{props.gender}</p>
                            <p className="card-text mb-0"><b>height: </b>{props.height}</p>
                            <p className="card-text mb-0"><b>Birth: </b>{props.birth}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default IdCard