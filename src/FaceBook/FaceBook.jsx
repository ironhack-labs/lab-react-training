import profiles from '../data/berlin.json';
import { useState } from 'react'

const FaceBook = () => {

    const [studentList, setStudentsList] = useState(profiles)



    return (

        studentList.map((elm, idx) => {

            <article key={idx} className="card">
                <div className="img-card">
                    <img src={elm.img} alt="profile-img" />
                </div>
                <div>
                    <p><strong>First name:</strong> {elm.firstName}</p>
                    <p><strong>Last name:</strong> {elm.lastName}</p>
                    <p><strong>Country:</strong> {elm.country}</p>
                    {elm.isStudent ? <p> Type: Student </p> : <p> Type: Teacher </p>}
                </div>
            </article>
        })
    )
}

export default FaceBook