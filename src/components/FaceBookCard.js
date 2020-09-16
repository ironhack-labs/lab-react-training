import React from 'react'


function FaceBookCard({firstName,lastName,country,img,isStudent}) {

    return (
        <article className="FaceBookCard">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="info">
                <p><b>First Name:</b> {firstName} </p>
                <p><b>Last Name:</b> {lastName} </p>
                <p><b>Country:</b>  {country}</p>
                {FaceBookCard && isStudent && <p><b>Type: </b>Student</p>}
                {FaceBookCard && !isStudent && <p><b>Type: </b>Teacher</p>}
            </div>

        </article>
    )
}

export default FaceBookCard
