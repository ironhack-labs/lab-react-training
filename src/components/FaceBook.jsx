import profiles from './../data/berlin.json';

function FaceBook() {
  console.log(profiles);
  return (
    <div class="facebook grid">
      {profiles.map((profile, i) => (
        <article>
          <img
            src={profile.img}
            alt={(profile.firstName, profile.lastName)}
            width="200"
            height="200"
          />
          <p>
            <strong>Name:</strong> {profile.firstName} {profile.lastName}
            <br />
            <strong>Country:</strong> {profile.country}
            <br />
            <strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}
          </p>
        </article>
      ))}
    </div>
  );
}

export default FaceBook;
