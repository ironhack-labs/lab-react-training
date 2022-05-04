import './Facebook.css'
import { useState } from 'react'
import profiles from '../data/berlin.json'

function Facebook() {

    const [classType, setClassType] = useState('')



    const buttons = profiles.map(e => {
        return (
            <button key={e.lastName} onClick={() => setClassType(e.country)}>{e.country}</button>
        )
    })


    const allProfiles = profiles.map(e => {
        return (<>

            <div key={e.firstName} className={(classType === e.country ? 'blue' : 'white')}>
                <img src={e.img} alt={e.firstName} />
                <p><b>First Name:</b> {e.firstName}</p>
                <p><b>Second Name:</b> {e.lastName}</p>
                <p><b>Country: </b>{e.country}</p>
                <p><b>Type: </b>{e.isStudent ? 'Student' : 'Teacher'} </p>

            </div></>
        )
    })

    return (

        <>{buttons}

            {allProfiles}</>
    )
}

export default Facebook