import profiles from '../../data/berlin.json'

const FaceBook = ((props) => {

    const { firstName, lastName, country, img, isStudent } = profiles

    return (

        profiles.map((student) => {

            return (<div className="card-person" >
                <div>
                    <img className="img-student" src={student.img} />
                </div>
                <div className="data-card">
                    <p><b>First name:</b> {student.firstName}</p>
                    <p><b>Last name:</b> {student.lastName}</p>
                    <p><b>Country:</b> {student.country}</p>
                    <p><b>Type:</b> {student.isStudent ? 'Student' : 'Teacher'}</p>
                </div>
            </div >)
        })

    )

})

export default FaceBook