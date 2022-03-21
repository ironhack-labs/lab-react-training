import React from 'react';

const IdCard = (props) => {
    return (
        <div>
            <div className="card mb-3" style={{maxWidth: "540px", backgroundColor : props.backgroundColor }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.picture} style={{height:"120px"}} alt="" />
                    </div>
                    <div className="col-md-8 mt-2">
                        <div className="card-body card-body_space">
                            <p style={{lineHeight:"2px", marginLeft:"-30px"}} >
                            <b>Last name:  </b>  {props.lastName}</p>
                            <p style={{lineHeight:"2px", marginLeft:"-30px"}} >
                            <b>First Name: </b>  {props.firstName}</p>

                            {props.gender?
                            <p style={{lineHeight:"2px", marginLeft:"-30px"}} >
                            <b>Gender:     </b>  {props.gender}</p>
                            : null}

                            {props.height ?
                            <p style={{lineHeight:"2px", marginLeft:"-30px"}} >
                            <b>Height:     </b>  {props.height}</p>
                            : null}

                            {props.birth ? 
                            <p style={{lineHeight:"2px", marginLeft:"-30px"}} >
                            <b>Birth:      </b>  {props.birth.toDateString()}</p> 
                            : null}

                            {props.country ? 
                            <p style={{lineHeight:"2px", marginLeft:"-30px"}} >
                            <b>Country:      </b>  {props.country}</p> 
                            : null}

                            {props.isStudent ? 
                            <p style={{lineHeight:"2px", marginLeft:"-30px"}} >
                            <b>Type: </b>  Student</p> 
                            : 
                            <p style={{lineHeight:"2px", marginLeft:"-30px"}} >
                            <b>Type: </b>  Teacher</p> 
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IdCard;
