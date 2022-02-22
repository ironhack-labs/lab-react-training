import { useState } from 'react'
import './FaceBook.css'
import profiles from './../data/berlin.json';

const FaceBook = () => {  
    const countries = profiles.filter((prof)=> prof.country)

    return(
        <article className="fcbook">
            {/* {countries.map((country, i) => <span key={i}>{country}</span>)} */}
            { 
                profiles.map(profile => {
                    return (<span key={profile.img} className='card'>

                       <img src={profile.img} /><br />
                       <span>
                           <span><b>First name: </b>{profile.firstName}</span><br/>
                           <span><b>Last name: </b>{profile.lastName}</span><br />
                           <span><b>Country: </b>{profile.country}</span><br />
                           {profile.isStudent ? <span><b>Type: </b>Student</span> : <span><b>Type: </b>Teacher</span>}
                    
                       </span>
                    
                    </span>)
            
            })
            }
        </article>

    )
    
}

export default FaceBook
