import React from 'react';

const IdCards = (props) => {
    const parseHeight = (height)=> {
        return height/100
    }  
    return (
            <div className="card mb-3 mt-4">
                <div className="row g-0 my-2 mx-2">
                    <div className=" d-flex justify-content-start">
                        <img src={props.picture} className="img-fluid rounded-start" alt="..." />
                        <div className="card-body text-start">
                            <h5 className="card-title">First Name: {props.firstName}</h5>
                            <h5 className="card-title">Last Name: {props.lastName}</h5>
                            <h5 className="card-title">Gender: {props.gender}</h5>
                            <h5 className="card-title">Height: {parseHeight(props.height)}m</h5>
                            <h5 className="card-title">Birth: {props.birth.toDateString()}</h5>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default IdCards;

