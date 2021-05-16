import React from 'react';
import '../App.css';
import profiles from '../data/berlin.json';

function FaceBook() {
  const [countrySelected, setCountrySelected] = React.useState('');

  const countries = [...profiles]
    .map((item) => item.country)
    .filter((item, index, self) => self.indexOf(item) == index);

  const handleClick = (value) => {
    setCountrySelected(value);
  };

  return (
    <div>
      <div>
        {countries.map((item, index) => (
          <CountryButton
            item={item}
            index={index}
            selected={countrySelected === item}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div>
        {profiles.map((person, index) => (
          <StudentCard
            person={person}
            key={index}
            selected={countrySelected === person.country}
          />
        ))}
      </div>
    </div>
  );
}

function CountryButton(props) {
  return (
    <button
      style={{
        backgroundColor: props.selected ? 'lightblue' : 'white',
      }}
      key={props.item}
      value={props.index}
      onClick={() => props.handleClick(props.item)}
    >
      {props.item}
    </button>
  );
}

function StudentCard(props) {
  return (
    <div
      style={{
        backgroundColor: `${props.selected ? 'lightblue' : 'white'}`,
      }}
    >
      <img src={props.person.img}></img>
      <p>
        <b>First name: </b>
        {props.person.firstName}
      </p>
      <p>
        <b>Last name: </b>
        {props.person.lastName}
      </p>
      <p>
        <b>Country: </b>
        {props.person.country}
      </p>
      <p>
        <b>Type: </b>
        {props.person.isStudent ? 'Student' : 'Teacher'}
      </p>
    </div>
  );
}

export default FaceBook;
