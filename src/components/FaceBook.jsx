import { useState } from 'react';
import profilesArray from '../data/berlin.json';

function FaceBook() {
  const [profilesToDisplay, setProfilesToDisplay] = useState(profilesArray);

  //   console.log(profiles);
  /*
[
  {"firstName": "Aaron", 
  "lastName": "Newell", 
  "country": "England", 
  "img": "https://i.imgur.com/CFgX3Xx.png", 
  "isStudent": false},
  */

  // display contacts
  const displayFacebook = () => {
    return profilesToDisplay.map((element) => {
      return (
        <div className="facebook-container" key={element.img}>
          <div className="facebook-image-container">
            <img className="facebook-image" src={element.img} alt="" />
          </div>
          <div className="facebook-information-container">
            <ul>
              <li>
                <span className="facebook-list-headline">First Name:</span>
                {element.firstName}
              </li>
              <li>
                <span className="facebook-list-headline">Last Name: </span>
                {element.lastName}{' '}
              </li>
              <li>
                <span className="facebook-list-headline">Country: </span>
                {element.country}
              </li>
              <li>
                <span className="facebook-list-headline">Type: </span>
                {element.isStudent ? 'Student' : 'Teacher'}
              </li>
            </ul>
          </div>
        </div>
      );
    });
  };

  // filter profiles
  const filterByCountry = (country) => {
    setProfilesToDisplay(
      profilesArray.filter((element) => {
        if (country === 'all') {
          return element;
        } else {
          return element.country === country;
        }
      })
    );
  };

  // return component
  return (
    <div className="facebook-page">
      <div className="sort-button-container">
        <button
          className="country-sort-button"
          onClick={() => {
            filterByCountry('all');
          }}
        >
          All
        </button>
        <button
          className="country-sort-button"
          onClick={() => {
            filterByCountry('England');
          }}
        >
          England
        </button>
        <button
          className="country-sort-button"
          onClick={() => {
            filterByCountry('USA');
          }}
        >
          USA
        </button>
        <button
          className="country-sort-button"
          onClick={() => {
            filterByCountry('Malaysia');
          }}
        >
          Malaysia
        </button>
        <button
          className="country-sort-button"
          onClick={() => {
            filterByCountry('Germany');
          }}
        >
          Germany
        </button>
        <button className="country-sort-button">...</button>
      </div>
      {displayFacebook()}
    </div>
  );
}
export default FaceBook;
