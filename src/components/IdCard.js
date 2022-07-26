import React from 'react';

function IdCard(props) {
  const fields = [];
  const options = [
    {
      title: 'First Name',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      key: 'lastName',
    },
    {
      title: 'Gender',
      key: 'gender',
    },
    {
      title: 'Height',
      key: 'height',
    },
    {
      title: 'Birth',
      key: 'birth',
    },
    {
      title: 'Country',
      key: 'country',
    },
    {
      title: 'Type',
      key: 'type',
    },
  ];

  options.forEach((option, index) => {
    if (props[option.key]) {
      fields.push(
        <li key={index}>
          {option.title}: {props[option.key]}
        </li>
      );
    }
  });

  return (
    <div className="id-card" style={props.style}>
      <div>
        <img src={props.picture} alt="Profile pic" />
      </div>
      <div>
        <ul>{fields}</ul>
      </div>
    </div>
  );
}

export default IdCard;