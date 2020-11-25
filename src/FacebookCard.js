import React from 'react';

const FacebookCard = (props) => {
  const { firstName, lastName, country, img, isStudent } = props;
  const person = [
    { 'First name': firstName },
    { 'Last name': lastName },
    { 'Country': country },
    { 'Type': isStudent ? 'Student' : 'Teacher' },
  ];
  return (
    <div className='facebook-card'>
      <img className='portrait' src={img} alt='portrait' />
      <div className='person-info'>
        {person.map((field, index) => {
          return <FieldNameAndValue
            key={index}
            fieldName={Object.keys(field)}
            fieldValue={Object.values(field)} />
        })}
      </div>
    </div>
  )
}

const FieldNameAndValue = (props) => {
  const { fieldName, fieldValue } = props;
  return (
    <p>
      <span className='field-name'>{fieldName}</span>:&nbsp;
      <span className='field-value'>{fieldValue}</span>
    </p>
  )
}

export default FacebookCard;