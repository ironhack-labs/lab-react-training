import React, {useState} from 'react'
import profiles from '../data/berlin.json';

export default function FaceBook() {

    const [data, setData] = useState(profiles)

    return (
        <div>
            {data.map((e, id)=>{
                return(
                    <div className="idCards">
                        <img width="200"src={e.img}/>
                        <div>
                        <p>First Name: {e.firstName}</p>
                        <p>Last Name: {e.lastName}</p>
                        <p>Country: {e.country}</p>
                        <p>Type: {e.isStudent? "Student" : "Teacher"}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}