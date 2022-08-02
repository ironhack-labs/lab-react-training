import profiles from '../data/berlin.json';

function FaceBook () {
    return (
        <div>
         <h3>Iteration 13</h3>
         {profiles.map((profile) => {
            return (
                <div className='profileCard'>
                    <div>
                        <img scr={profile.img} alt="profileImg" />
                    </div>
                    <div>
                        <p>First name: {profile.firstName}</p>
                        <p>Last name: {profile.lastName}</p>
                        <p>Country: {profile.country}</p>
                        <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
                    </div>
                </div>
            )
         })
         }
        </div>
    )
}
export default FaceBook