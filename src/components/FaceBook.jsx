import React from 'react';
import '../App.css';
import profiles from '../data/berlin.json';

function FaceBook() {
  const [buttonClicked, setButtonClicked] = React.useState(false);

  const countries = [...profiles]
    .map((item) => item.country)
    .filter((item, index, self) => self.indexOf(item) == index);

  const buttonSelected = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <div>
      <div>
        {countries.map((item, index) => (
          <button
            style={{
              backgroundColor: buttonClicked ? 'lightblue' : 'white',
            }}
            onClick={buttonSelected}
            key={item}
            value={index}
          >
            {item}
          </button>
        ))}
      </div>
      {profiles.map((person, index) => (
        <div key={index}>
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
  );
}

export default FaceBook;
