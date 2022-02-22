const ProfileCard = ({ firstName, lastName, country, img, isStudent }) => {

let job = ''
if(isStudent){
    job = 'Student'
}else{
    job = 'teacher'
}

    return (
        <div key={firstName} className="profileCard">
            <img src={img}/>
            <h3>First name:{firstName}</h3>
            <h3>last name:{lastName}</h3>
            <p>Country: {country}</p>
            <p>type: {job}</p>
            
        </div>
    )
}

export default ProfileCard