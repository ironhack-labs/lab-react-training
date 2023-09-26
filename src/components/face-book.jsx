import profiles from "../data/berlin.json";

function FaceBookProfile({ profile }) {
    return (
        <div className="border border-dark d-flex flex-row p-1 m-2">
            <img src={profile.img} style={{ height: "150px"}} />
            <div className="text-start ms-1">
                <div><strong>First name:</strong> {profile.firstName}</div>
                <div><strong>Last name:</strong> {profile.lastName}</div>
                <div><strong>Country:</strong> {profile.country}</div>
                <div><strong>Type:</strong> {profile.isStudent ? "Student" : "Teacher"}</div>
            </div>
        </div>
    )
}

function FaceBook() {
    return (
        <div>
            {profiles.map((profile) => (
                <FaceBookProfile profile={profile} key={profile.firstName + profile.lastName} />
            ))}
        </div>
    )
}

export default FaceBook;