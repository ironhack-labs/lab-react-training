import profiles from '../data/berlin.json'

function Facebook() {

    const profileArray = profiles.map((profile) => {
        return (
            <div className="profile-container">
                <div className="profile-pic">
                    <img src={profile.img} alt="profile" style={{ width: "200px" }} />
                </div>
                <div className="profile-info-box">
                    <p><b>First Name:</b> {profile.firstName}</p>
                    <p><b>Last Name:</b> {profile.lastName}</p>
                    <p><b>Country:</b> {profile.country}</p>
                    <p><b>Country:</b> {profile.isStudent ? "Student" : "Teacher"}</p>

                </div>
            </div>
        )
    })





    return (
        <div>
            {profileArray}
        </div>
    )
}

export default Facebook;