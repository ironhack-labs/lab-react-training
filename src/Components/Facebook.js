import React, { useState } from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
    const [profilesApp, setProfiles] = useState(
      profiles.map((profile, index) => {
        return (
          <div key={index} className="card">
            <div>
              <img style={{ width: '200px' }} src={profile.img} alt="image" />
            </div>
            <div>
              <p>
                First name: <span>{profile.firstName}</span>
              </p>
              <p>
                Last name: <span>{profile.lastName}</span>
              </p>
              <p>
                Country: <span>{profile.country}</span>
              </p>
              {profile.isStudent && (
                <p>
                  Type:<span>Student</span>
                </p>
              )}
              {!profile.isStudent && (
                <p>
                  Type:<span>Teacher</span>
                </p>
              )}
            </div>
          </div>
        );
      })
    );
 
     const handleAll = () => {
      setProfiles(
        profiles.map((profile, index) => {
          return (
            <div key={index} className="card">
              <div>
                <img style={{ width: '200px' }} src={profile.img} alt="image" />
              </div>
              <div>
                <p>
                  First name: <span>{profile.firstName}</span>
                </p>
                <p>
                  Last name: <span>{profile.lastName}</span>
                </p>
                <p>
                  Country: <span>{profile.country}</span>
                </p>
                {profile.isStudent && (
                  <p>
                    Type:<span>Student</span>
                  </p>
                )}
                {!profile.isStudent && (
                  <p>
                    Type:<span>Teacher</span>
                  </p>
                )}
              </div>
            </div>
          );
        })
      );
    };
    const handleEngland = () => {
      setProfiles(
        profiles
          .filter((profile) => profile.country === 'England')
          .map((profile, index) => {
            return (
              <div key={index} className="card">
                <div>
                  <img style={{ width: '200px' }} src={profile.img} alt="image" />
                </div>
                <div>
                  <p>
                    First name: <span>{profile.firstName}</span>
                  </p>
                  <p>
                    Last name: <span>{profile.lastName}</span>
                  </p>
                  <p>
                    Country: <span>{profile.country}</span>
                  </p>
                  {profile.isStudent && (
                    <p>
                      Type:<span>Student</span>
                    </p>
                  )}
                  {!profile.isStudent && (
                    <p>
                      Type:<span>Teacher</span>
                    </p>
                  )}
                </div>
              </div>
            );
          })
      );
    };
    const handleUSA = () => {
      setProfiles(
        profiles
          .filter((profile) => profile.country === 'USA')
          .map((profile, index) => {
            return (
              <div key={index} className="card">
                <div>
                  <img style={{ width: '200px' }} src={profile.img} alt="image" />
                </div>
                <div>
                  <p>
                    First name: <span>{profile.firstName}</span>
                  </p>
                  <p>
                    Last name: <span>{profile.lastName}</span>
                  </p>
                  <p>
                    Country: <span>{profile.country}</span>
                  </p>
                  {profile.isStudent && (
                    <p>
                      Type:<span>Student</span>
                    </p>
                  )}
                  {!profile.isStudent && (
                    <p>
                      Type:<span>Teacher</span>
                    </p>
                  )}
                </div>
              </div>
            );
          })
      );
    };
    const handleMalaysia = () => {
      setProfiles(
        profiles
          .filter((profile) => profile.country === 'Malaysia')
          .map((profile, index) => {
            return (
              <div key={index} className="card">
                <div>
                  <img style={{ width: '200px' }} src={profile.img} alt="image" />
                </div>
                <div>
                  <p>
                    First name: <span>{profile.firstName}</span>
                  </p>
                  <p>
                    Last name: <span>{profile.lastName}</span>
                  </p>
                  <p>
                    Country: <span>{profile.country}</span>
                  </p>
                  {profile.isStudent && (
                    <p>
                      Type:<span>Student</span>
                    </p>
                  )}
                  {!profile.isStudent && (
                    <p>
                      Type:<span>Teacher</span>
                    </p>
                  )}
                </div>
              </div>
            );
          })
      );
    };
    const handleGermany = () => {
      setProfiles(
        profiles
          .filter((profile) => profile.country === 'Germany')
          .map((profile, index) => {
            return (
              <div key={index} className="card">
                <div>
                  <img style={{ width: '200px' }} src={profile.img} alt="image" />
                </div>
                <div>
                  <p>
                    First name: <span>{profile.firstName}</span>
                  </p>
                  <p>
                    Last name: <span>{profile.lastName}</span>
                  </p>
                  <p>
                    Country: <span>{profile.country}</span>
                  </p>
                  {profile.isStudent && (
                    <p>
                      Type:<span>Student</span>
                    </p>
                  )}
                  {!profile.isStudent && (
                    <p>
                      Type:<span>Teacher</span>
                    </p>
                  )}
                </div>
              </div>
            );
          })
      );
    };
 
     return (
      <div>
        <button onClick={handleAll}>All</button>
        <button onClick={handleEngland}>England</button>
        <button onClick={handleUSA}>USA</button>
        <button onClick={handleMalaysia}>Malaysia</button>
        <button onClick={handleGermany}>Germany</button>
 
         {profilesApp}
      </div>
    );
  }
 
   export default FaceBook;