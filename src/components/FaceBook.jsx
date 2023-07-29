import berlinDataJSON from '../data/berlin.json'

function FaceBook() {
  return (
    <div className="FaceBook">
      {
        berlinDataJSON.map((profile, i) => {
          const { firstName, lastName, country, img, isStudent } = profile
          return (
            <div className="IdCard" key={firstName + lastName + i}>
              <div className="profile-img-container">
                <img src={img} alt="imageId" />
              </div>
              <div>
                <p>
                  <b>First name:</b> {firstName}
                </p>
                <p>
                  <b>Last name:</b> {lastName}
                </p>
                <p>
                  <b>Country:</b> {country}
                </p>
                <p>
                  <b>Type:</b> {isStudent ? "Student" : "Teacher"}
                </p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default FaceBook