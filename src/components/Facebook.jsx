import profiles from '../data/berlin.json'

const Facebook = (props) => {
    return(
        <div>
            {profiles.map((user) => {
                return <div key={`${user.firstName}-${user.lastName}-${user.country}`} className="fb-user-card">
                    <div>
                        <img className='fb-user-picture' src={user.img} alt="user"/>
                    </div>
                    <div className='fb-user-info'>
                        <p><b>First name:</b>{user.firstName}</p>
                        <p><b>Last name:</b>{user.lastName}</p>
                        <p><b>Country:</b>{user.country}</p>
                        {user.isStudent && <p><b>Type:</b>Student</p>}
                        {!user.isStudent && <p><b>Type:</b>Teacher</p>}
                    </div>
                </div>
            })}
        </div>
    )
}

export default Facebook