
import profiles from '../Data/berlin.json'

const FaceBook = () => {

    return (
        <div>
            {profiles.map((profile, index) => (
                <div key={index}>
                    <p>First Name: {profile.firstName} {profile.lastName}</p>
                    <p>Country : {profile.country} </p>
                    <p>{profile.isStudent ? 'Student' : ''}</p>
                    <img src={profile.img} alt="" />

                </div>
            ))}
        </div>
    )
}


export default FaceBook
