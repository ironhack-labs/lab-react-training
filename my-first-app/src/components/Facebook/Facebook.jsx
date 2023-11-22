import profiles from '../../data/berlin.json'

function FaceBook() {
    return (
        <div className="facebook-profiles">
            <h1>Facebook Profiles</h1>
            <ul>
                {profiles.map((profile, index) => (
                    <li key={index}>
                        <img src={profile.img} alt="profile pic" />
                        <p>Name: {profile.firstName}</p>
                        <p>Lastname: {profile.lastName}</p>
                        <p>Country: {profile.country}</p>
                        <p>Student: {profile.isStudent ? 'Yes' : 'No'}</p>

                    </li>
                ))}
            </ul>
        </div>
    )
}


export default FaceBook