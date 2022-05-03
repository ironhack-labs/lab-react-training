import profiles from './../../data/berlin.json';
import './FaceBook.css'

import { useState } from 'react'


const FaceBook = () => {


    const [studentList, setStudentList] = useState(profiles)

    return (
        <section>

            <button >USA</button>
            {
                studentList.map((elm, idx) => {

                    return <article key={idx} alt="student">
                        <img className='imgstudent' src={elm.img} />
                        <p>First name: {elm.firstName}</p>
                        <p>Last name: {elm.lastName}</p>
                        <p>Country: {elm.country}</p>
                        {elm.isStudent ? <p> Type: Student </p> : <p> Type: TA </p>}
                    </article>
                })
            }
        </section>
    )
}

export default FaceBook