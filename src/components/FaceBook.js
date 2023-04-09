import profiles from "../data/berlin.json"

function FaceBook() {

    return (
        <>
            {profiles.map(profile => {

                return(
                    <div className="idCard">
                        <div className="idCardPicture">
                            <img src={profile.img} alt="" />
                        </div>
                        <div className="idCardText">
                            <p><b>First Name: </b>{profile.firstName}</p>
                            <p><b>Last Name: </b>{profile.lastName}</p>
                            <p><b>Country: </b> {profile.country}</p>
                            {profile.isStudent ? <p><b>Type: </b>Student</p> : <p><b>Type: </b>Teacher</p>}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default FaceBook;