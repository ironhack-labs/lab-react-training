import profiles from '../data/berlin.json';
function Facebook() {
    return (
      <div>
        {profiles.map((profile) => (
          <profile key={profile.firstName + profile.lastName} {...profile} />
        ))}
      </div>
    );
  }
  
  export default Facebook;