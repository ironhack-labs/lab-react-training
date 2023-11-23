import profiles from './../../data/berlin.json'

const FaceBook = () => {
    return (
        <div className="facebook-profiles">
            {profiles.map((profile, index) => (
                <div key={index} className="profile">
                    <img src={profile.img} alt={profile.firstName} className="profile-img" />
                    <h2>{`${profile.firstName} ${profile.lastName}`}</h2>
                    <p>{`Country: ${profile.country}`}</p>
                    <p>{`Type: ${profile.isStudent ? 'Student' : 'Teacher'}`}</p>
                </div>
            ))}
        </div>
    )
}

export default FaceBook