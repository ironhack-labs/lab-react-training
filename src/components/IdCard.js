// components/IdCard.js

import React from 'react';
import { uniqueId } from 'lodash';

const IdCard = (props) => {
  const { picture, firstName, lastName, gender, height, birth } = props;
  const person = [
    { 'First name': firstName },
    { 'Last name': lastName },
    { 'Gender': gender },
    { 'Height': height },
    { 'Birthday': formatDate(birth)}
  ];
  return (
    <div class='id-card'>
      <img class='portrait' src={picture} alt='portrait' />
      <div class='person-info'>
        {person.map((field) => {
          return <FieldNameAndValue
            key={uniqueId()}
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

const formatDate = (date) => {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  return date.toLocaleDateString('en-US', options);
}

export default IdCard;
