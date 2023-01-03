import React from "react";
import './IdCard.css'

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
    return (
        <div className="card">
            <div>
             <img src={picture}/>
            </div>
            <div className="user">
                <p> <b> lastName </b>: {lastName}</p>
                 <p> <b>first Name :</b> {firstName} </p> 
                 <p><b> Gender :</b> {gender}</p>
                 <p> <b>Height :</b>{height}</p>
                 <p><b> Brith : </b>{birth.toDateString()}</p>

            </div>

        </div>
    )
}
export default IdCard