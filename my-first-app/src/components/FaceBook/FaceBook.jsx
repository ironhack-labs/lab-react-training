import { useState } from 'react'
import profiles from './../../data/berlin.json'
import FacebookCard from './FaceBookCard'

const FaceBook = () => {
    
    const [profile, setProfiles] = useState(profiles)

    return(
        <>
        <h1>Lista de FaceBook</h1>
        {
            profiles.map((elm, i) => {
                return (
                    <FacebookCard key={i} {...elm}/>
                )
            })
        }
        </>
    )
}

export default FaceBook 