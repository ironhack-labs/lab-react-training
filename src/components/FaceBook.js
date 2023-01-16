import profiles from '../data/berlin.json';

import '../App.css'

function Facebook() {

function studentTeacher(profile){
    if (profile.isStudent === true){
        return <p>Student</p>
    } else{ 
        return <p>Teacher</p>
    }
}

    return (
        profiles.map((profile)=>{
            return(
                <tr key= {profile.img} id='profile-table'>
                <td><img src={profile.img} alt='profile-pic' id='profile-pic'/></td> 
                <td className='profileDetails'><span style={{ fontWeight: 'bold' }}>First Name:</span> {profile.firstName}</td>
                <td className='profileDetails'><span style={{ fontWeight: 'bold' }}>Last Name:</span> {profile.lastName}</td>
                <td className='profileDetails'><span style={{ fontWeight: 'bold' }}>Country:</span> {profile.country}</td>
                <td className='profileDetails'><span style={{ fontWeight: 'bold' }}>Type:</span> {studentTeacher(profile)}</td>
                </tr>
            )
        })
    )
}

export default Facebook;