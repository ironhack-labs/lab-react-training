import React from "react";
import profiles from '../../data/berlin.json'
import './FaceBook.css'

const FaceBook = () => {
    return (

        <div >
            <div>
                {profiles.map((profile) => (
                    < div key={profile.lastName}>

                        <div className="contactCard">
                            <img className="contactImg"
                                src={profile.img}
                                alt={profile.firstName} />
                            <div className="contactData">
                                <div>
                                    <p>
                                        <strong>First Name:</strong>{profile.firstName}
                                        <br />
                                        <strong>Last Name:</strong>{profile.lastName}
                                        <br />
                                        <strong>Country:</strong>{profile.country}
                                        <br />
                                        <strong>Type:</strong>
                                        {profile.isStudent === true ? 'Student' : 'Teacher'}
                                        <br />
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}
export default FaceBook;