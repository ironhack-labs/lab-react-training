import { useState, useRef  } from "react";
import './FaceBook.css';
import profiles from '../../../data/berlin.json';

function FaceBook() {

  const countries = ['England', 'USA', 'Malaysia', 'Germany', 'Sweden', 'Nigeria', 'Italy', 'Scotland', 
  'Kazakhstan', 'Russia', 'Catalonia', 'France', 'Israel', 'Brazil', 'Taiwan', 'Turkey', 'Norway']
  
  const profileCardsRef = useRef([]);

  const [selectedCountry, setSelectedCountry] = useState(null);

  const scrollToCountry = (country) => {
    if (selectedCountry === country) {
      setSelectedCountry(null);
    } else {
      setSelectedCountry(country);

      const targetCard = profileCardsRef.current.find(
        (card) => card.id === country
      );
      console.log(targetCard)

      if (targetCard) {
        targetCard.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const countryButtons = () => {
    return countries.map((country, index) => {
      return (
        <button
          key={index}
          id={country}
          className={selectedCountry === country ? "highlighted" : ""}
          onClick={() => scrollToCountry(country)}
        >
          {country}
        </button>
      );
    });
  };

  const profileCards = () => {
    return profiles.map((profile, index) => {
      return (
        <div
          key={index}
          className={`facebook-container ${selectedCountry === profile.country ? "highlighted" : ""}`}
          id={profile.country}
          ref={(el) => (profileCardsRef.current[index] = el)}
        >
          <img src={profile.img} alt="profile image" className="facebook-img" />
          <div className="facebook-second-container">
            <p><b>First Name</b>: {profile.firstName}</p>
            <p><b>Last Name</b>: {profile.lastName}</p>
            <p><b>Country</b>: {profile.country}</p>
            <p><b>Type</b>: {profile.isStudent ? "Student" : "Teacher"}</p>
          </div>
        </div>
      );
    });
  };



  return (
    <div>
      {countryButtons()}
      {profileCards()}
    </div>
  );
}

export default FaceBook;