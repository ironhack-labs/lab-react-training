import { useState } from "react";

function FaceBookInfo({ firstName, lastName, country, isStudent }) {
    return (
        <div className="FaceBookInfo">
            <p><strong>First Name:</strong>{firstName}</p>
            <p><strong>Full Name:</strong>{lastName}</p>
            <p><strong>Country:</strong>{country}</p>
            <p><strong>Type:</strong>{isStudent ? 'Student' : 'Teacher'}</p>
        </div>
    );
}
export default FaceBookInfo;
