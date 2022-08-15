import profiles from '../data/berlin.json';
import './Facebook.css'

function FaceBook () {
   
   let profileFace = profiles.map((profile) => {
       return <div key={profile.firstName} className='profile-face'>
                <div className='face-img'><img src={profile.img} alt='faceimg' /></div>
                <div className='face-datas'>
                    <b>First Name:</b> {profile.firstName}<br/>
                    <b>Last Name:</b> {profile.lastName}<br/>
                    <b>Country:</b> {profile.country}<br/>
                    <b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}<br/> 
                </div>
            </div>
    })

    return (
        <div >
        {profileFace}
        </div>
    )
}

export default FaceBook; 