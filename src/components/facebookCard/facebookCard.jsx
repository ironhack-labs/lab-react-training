import React, { useState } from 'react';

function FacebookCard({ personList }) {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleImageClick = (index) => {
    setSelectedProfile(index === selectedProfile ? null : index);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPersonList = personList.filter((person) =>
    person.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="search-input">
        <input
          type="text"
          placeholder="Search profiles..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="d-flex flex-wrap">
        {filteredPersonList.map((person, index) => (
          <div
            key={index}
            className={`card mb-3 ${selectedProfile === index ? 'selected' : ''}`}
            style={{ maxWidth: '540px' }}
            onClick={() => handleImageClick(index)}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={person.img}
                  className="img-fluid rounded-start"
                  alt={`Picture of ${person.firstName} ${person.lastName}`}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  {selectedProfile === index ? (
                    <>
                      <p className="card-text">
                        <strong>First Name:</strong> {person.firstName}
                        <br />
                        <strong>Last Name:</strong> {person.lastName}
                        <br />
                        <strong>Country:</strong> {person.country}
                        <br />
                        <strong>Type:</strong> {person.isStudent ? 'Student' : 'Teacher'}
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">Last updated 3 mins ago</small>
                      </p>
                    </>
                  ) : (
                    <p className="card-text">
                      <strong>Click to view details</strong>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FacebookCard;