import React from 'react';


function IdCard(props) {
    return (
        <div className="card m-3" >
            <div className="row g-0">
                <div className="col-md-4">
                <img src={props.picture} className="img-fluid rounded-start pics" alt="Profile"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text"><b>First Name: </b>{props.firstName}</p>
                        <p className="card-text"><b>Last Name: </b>{props.lastName}</p>
                        <p className="card-text"><b>Gender: </b>{props.gender}</p>
                        <p className="card-text"><b>Height: </b>{props.height}</p>
                        <p className="card-text"><b>Birth: </b>{props.birth.toString()}</p>
                    </div>
               </div>
            </div>
        </div> 
    )
}

export default IdCard