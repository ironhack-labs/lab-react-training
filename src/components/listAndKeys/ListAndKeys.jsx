import { useEffect, useState } from 'react';
import profiles from '../../data/berlin.json';
import '../faceBook/faceBook.css';
import './listAndKeys.css';

const ListAndKeys = () => {
  const [countries, setCountries] = useState([]);
  const [color, setColor] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    const country = [];
    profiles.forEach((prof) => {
      if (!country.includes(prof.country)) {
        country.push(prof.country);
      }
    });
    setCountries(country);
  }, []);

  const handleCountry = (country) => {
    setColor('#b97b18');
    setCountry(country);
  };

  const handleColorReset = () => {
    setColor('');
    setCountry('');
  };

  return (
    <div>
      <div className="countries">
        <button onClick={handleColorReset} className="all">
          All
        </button>
        {countries.map((prof) => {
          const btnStyle = {
            backgroundColor: color,
            color: '#f0f8ff',
          };

          return (
            <button
              key={prof}
              onClick={() => handleCountry(prof)}
              style={country === prof ? btnStyle : undefined}
            >
              {prof}
            </button>
          );
        })}
      </div>
      <div className="facebook-container">
        {profiles.map((prof, i) => {
          const divStyle = {
            backgroundColor: color,
            color: '#f0f8ff',
          };

          return (
            <div
              key={i}
              className="facebook"
              style={country === prof.country ? divStyle : undefined}
            >
              <div className="img">
                <img src={prof.img} alt={prof.firstName} />
              </div>
              <div className="data">
                <p>
                  <span>First name: </span>
                  {prof.firstName}
                </p>
                <p>
                  <span>Last name: </span>
                  {prof.lastName}
                </p>
                <p>
                  <span>Country: </span>
                  {prof.country}
                </p>
                <p>
                  <span>Type: </span>
                  {prof.isStudent ? 'Student' : 'Teacher'}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListAndKeys;
