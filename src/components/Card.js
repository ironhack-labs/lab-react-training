import React from 'react';
import Greetings from './Greetings';

export default function Card(props) {
  const person = props.person;
  const languages = ['en', 'fr', 'it', 'ru', 'es', 'ch'];
  const randomNum = Math.floor(Math.random() * languages.length);

  return (
    <div>
      <Greetings lang={languages[randomNum]}>{person.firstName}</Greetings>
      <div className="card">
        <img src={person.img} alt={person.firstName} className="profilePic" />
        <div className="profileData">
          <span>First name: {person.firstName}</span>
          <span>Last Name: {person.lastName}</span>
          <span>Country: {person.country}</span>
        </div>
      </div>
    </div>
  );
}
