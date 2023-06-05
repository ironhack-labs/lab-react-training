import data from '../data/berlin.json';

const countries = data.map((person) => person.country);
const uniqueCountries = [...new Set(countries)];

function selectCountry(event) {
  const buttonCountry = event.target.innerText;
  const idCards = document.getElementsByClassName('IdCard');
  for (let profile of idCards) {
    if (
      profile.children[1].children[2].innerText.split(' ')[1] === buttonCountry
    ) {
      profile.style.backgroundColor = 'lightblue';
    } else {
      profile.style.backgroundColor = 'white';
    }
    console.log(profile.children[1].children[2].innerText.split(' ')[1]);
  }
}

function Facebook() {
  return (
    <div>
      <button onClick={selectCountry}>All</button>
      {uniqueCountries.map((country) => {
        return <button onClick={selectCountry}>{country}</button>;
      })}
      {data.map((person) => {
        return (
          <div className="IdCard">
            <div className="profileImg">
              <img src={person.img} alt="profileImg" height={100} />
            </div>
            <div className="profileData">
              <p>
                <strong>First name:</strong> {person.firstName}
              </p>
              <p>
                <strong>Last name:</strong> {person.lastName}
              </p>
              <p>
                <strong>Country:</strong> <span className="personCountry">{person.country}</span>
              </p>
              <p>
                <strong>Type:</strong> {person.isStudent ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Facebook;
