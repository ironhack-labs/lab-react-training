import React from "react";
import './FaceBook.css'
import profiles from '../../data/berlin.json';

function FaceBook(props) {
    const [countrySelected, setCountrySelected] = React.useState("");

    return (
      <>
        <div className="buttons">
          <button onClick={() => setCountrySelected('All')}>All</button>
          <button onClick={() => setCountrySelected('England')}>England</button>
          <button onClick={() => setCountrySelected('USA')}>USA</button>
          <button onClick={() => setCountrySelected('Italy')}>Italy</button>
          <button onClick={() => setCountrySelected('Germany')}>Germany</button>
        </div>
        {profiles.map((profile) => (
          <div
            key={profile.firstName + profile.lastName}
            style={{
              backgroundColor:
                countrySelected === 'All' || profile.country === countrySelected
                  ? '#A3D3E2'
                  : 'white',
            }}
            className="card"
          >
            <div>
              <img src={profile.img} alt="picture" />
            </div>
            <div className="informations">
              <div className="display-flex">
                <strong>First name:</strong>
                <p>{profile.firstName}</p>
              </div>
              <div className="display-flex">
                <strong>Last name:</strong>
                <p>{profile.lastName}</p>
              </div>
              <div className="display-flex">
                <strong>Country:</strong>
                <p>{profile.country}</p>
              </div>
              <div className="display-flex">
                <strong>Type:</strong>
                <p>{profile.isStudent ? 'Student' : 'Teacher'}</p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
}
export default FaceBook;
