import React from 'react';

function FaceBook({ profiles }) {
  return (
    <div>
      {profiles.map((profile, index) => (
        <h2 key={index}>{profile.firstName}</h2>
      ))}
    </div>
  );
}

export default FaceBook;
