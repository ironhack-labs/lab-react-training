import { useState } from 'react'
import profiles from './../../data/berlin.json'
import './FaceBook.css'



const FaceBook = () => {

    const [list, setlist] = useState(profiles)


    return (
        <div className="facebook">
            <h1>Facebook</h1>
            {
                list.map((elm, idx) => {
                    return (
                        <article key={idx} className='list'>
                            <img src={elm.img} alt="" />
                            <p>First Name:{elm.firstName}</p>
                            <p>Last Name:{elm.lastName}</p>
                            <p>Country:{elm.country}</p>
                            {elm.isStudent ? <p>Type: Student</p> : <p>Type: Teacher</p>}
                        </article>
                    )
                })
            }
        </div>
    )

}

export default FaceBook