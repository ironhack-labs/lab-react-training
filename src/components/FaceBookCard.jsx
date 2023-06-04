
function FaceBookCard({profile, bgColor}) {
  return (
    <div>
            <div className="facebookdiv" style={{backgroundColor: bgColor}}>
              <div>
                  <img style={{height:"170px"}} alt="profile" src={profile.img}/>
              </div>
              <div>
                  <p>First name: {profile.firstName}</p>
                  <p>Last name: {profile.lastName}</p>
                  <p>Country: {profile.country}</p>
                  <p>Type: {profile.isStudent ? "Student" : "Teacher"}</p>
              </div>
            </div>
    </div>
  )
}

export default FaceBookCard
