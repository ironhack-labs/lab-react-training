import React from 'react';

const IdCard = (props) => {
    return (
        <div>
            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.picture} className="img-fluid rounded-start" alt="" />
                    </div>
                    <div className="col-md-8 mt-2">
                        <div className="card-body card-body_space">
                            <p style={{lineHeight:"2px", marginLeft:"-30px"}} >
                            <b>Last name:  </b>  {props.lastName}</p>
                            <p style={{lineHeight:"2px", marginLeft:"-30px"}} >
                            <b>First Name: </b>  {props.firstName}</p>
                            <p style={{lineHeight:"2px", marginLeft:"-30px"}} >
                            <b>Gender:     </b>  {props.gender}</p>
                            <p style={{lineHeight:"2px", marginLeft:"-30px"}} >
                            <b>Height:     </b>  {props.height}</p>
                            <p style={{lineHeight:"2px", marginLeft:"-30px"}} >
                            <b>Birth:      </b>  {props.birth.toDateString()}</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IdCard;
