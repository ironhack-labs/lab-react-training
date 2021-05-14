import React from 'react';
import '../App.css';
import profiles from '../data/berlin.json';

function CountryButton(props) {
  const [buttonClicked, setButtonClicked] = React.useState(false);

  const buttonSelected = (event) => {
    setButtonClicked(!buttonClicked);
    props.setCountrySelected(event.target.innerText);
  };

  return (
    <button
      style={{
        backgroundColor: buttonClicked ? 'lightblue' : 'white',
      }}
      onClick={buttonSelected}
      key={props.item}
      value={props.index}
    >
      {props.item}
    </button>
  );
}

function FaceBook() {
  const [buttonClicked, setButtonClicked] = React.useState('');
  const [countrySelected, setCountrySelected] = React.useState('');

  const countries = [...profiles]
    .map((item) => item.country)
    .filter((item, index, self) => self.indexOf(item) == index);

  return (
    <div>
      <div>
        {countries.map((item, index) => (
          <CountryButton
            item={item}
            index={index}
            setButtonClicked={setButtonClicked}
            setCountrySelected={setCountrySelected}
          />
        ))}
      </div>
      <div>
        {profiles.map((person, index) => (
          <div
            key={index}
            style={{
              backgroundColor: `${buttonClicked} && ${countrySelected} === ${person.country} ? 'lightblue' : 'white'`,
            }}
          >
            <img src={person.img}></img>
            <p>
              <b>First name: </b>
              {person.firstName}
            </p>
            <p>
              <b>Last name: </b>
              {person.lastName}
            </p>
            <p>
              <b>Country: </b>
              {person.country}
            </p>
            <p>
              <b>Type: </b>
              {person.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaceBook;
