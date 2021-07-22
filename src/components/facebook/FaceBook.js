import profiles from '../../data/berlin.json'
function FaceBook() {

    const list = profiles.map(profile => {
        return (
            <div className="d-flex container ms-5 mt-2">
                <img className="m-2 " style={{height: '150px'}} src={profile.img} alt="descripto"/>
                <div className="ms-3 mt-3">
                    <span> <b> First Name:</b>  {profile.firstName}</span> <br/>
                    <span> <b> Last Name:</b> {profile.lastName}</span> <br/>
                    <span> <b> Country:</b> {profile.country}</span> <br/>
                    <span> <b> Tyspane:</b> {profile.isStudent ? 'Student': 'Teacher'}</span> <br/>
                </div>
            </div>
        )
    })
    return(
        <div>
            {list}
        </div>
    )
}
export default FaceBook