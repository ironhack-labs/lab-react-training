import profiles from '../data/berlin.json';

const Facebook = () => {
  console.log(profiles)
  return (
    <div>
      {profiles.map((profile, index) => (
        <div key={index} className="facebookContainer" >
          <div>
            <img src={profile.img} width="150" height="150" alt="" />
          </div>
          <div className='facebookInfo' >
            <p>First name: <span> {profile.firstName} </span></p>
            <p>Last name: <span> {profile.lastName} </span> </p>
            <p>Country: <span> {profile.country} </span> </p>
            <p>Type: {profile.isStudent ? <span>Student</span> : <span>Teacher</span> }</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Facebook;