import profiles from '../data/berlin.json';
import classes from './Facebook.module.css';

const Facebook = () => {
  const profilesArr = profiles.map((profile) => {
    return (
      <div key={profile.img} className={classes.container}>
        <img
          src={profile.img}
          alt={profile.name}
          className={classes.profileImg}
        />
        <div className={classes.dataContainer}>
          <p>First name: {profile.firstName}</p>
          <p>Last name: {profile.lastName}</p>
          <p>Country: {profile.country}</p>
          <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
        </div>
      </div>
    );
  });
  return <div>{profilesArr}</div>;
};

export default Facebook;
