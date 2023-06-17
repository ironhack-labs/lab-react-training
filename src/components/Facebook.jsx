import profiles from '../data/berlin.json';
import Profile from './Profile';

export default function Facebook() {
  return (
    <>
      {profiles.map((profile) => (
        <Profile
          picture={profile.img}
          firstName={profile.firstName}
          lastName={profile.lastName}
          country={profile.country}
          isStudent={profile.isStudent}
        />
      ))}
    </>
  );
}
