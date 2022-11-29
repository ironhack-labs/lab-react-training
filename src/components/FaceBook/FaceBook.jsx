import { useState } from 'react';
import profiles from './../../data/berlin.json';
import './FaceBook.css';

const FaceBook = () => {
  const [contacts, setContacts] = useState(profiles);
  const [country, setCountry] = useState('');

  const handleClick = (e) => {
    setCountry(e.target.value);
  };

  const handleInput = (e) => {
    const filteredNames = contacts.filter((elm) =>
      elm.firstName.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setContacts(filteredNames);
  };

  const sortByName = () => {
    const sortedByName = [...contacts];
    sortedByName.sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
    setContacts(sortedByName);
  };

  const sortByLastName = () => {
    const sortedByLastName = [...contacts];
    sortedByLastName.sort((a, b) => {
      return a.lastName.localeCompare(b.lastName);
    });
    setContacts(sortedByLastName);
  };

  return (
    <div>
      <button value="All" onClick={handleClick}>
        All
      </button>
      <button value="England" onClick={handleClick}>
        England
      </button>
      <button value="USA" onClick={handleClick}>
        USA
      </button>
      <button value="Malaysia" onClick={handleClick}>
        Malaysia
      </button>
      <button value="Germany" onClick={handleClick}>
        Germany
      </button>
      <button onClick={sortByName}>Sort by first name</button>
      <button onClick={sortByLastName}>Sort by last name</button>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter a name"
        onChange={handleInput}
      />
      {contacts.map((elm) => {
        return (
          <div
            className="fbCard"
            key={elm.firstName}
            style={
              country === elm.country || country === 'All'
                ? {
                    backgroundColor: 'lightblue',
                  }
                : {}
            }
          >
            <img src={elm.img} alt={elm.firstName} />
            <div>
              <p>
                <b>First name: </b>
                {elm.firstName}
              </p>
              <p>
                <b>Last name:</b>
                {elm.lastName}
              </p>
              <p>
                <b>Country: </b>
                {elm.country}
              </p>
              <p>
                <b>Type:</b>
                {elm.type}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaceBook;
