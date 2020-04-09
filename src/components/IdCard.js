// components/IdCard.js

import React from 'react';
import { uniqueId } from 'lodash';

const FieldNameAndValue = (props) => {
  const { fieldName, fieldValue } = props;
  console.log('props', props);
  return (
    <p>
      <span className='name'>{fieldName}</span>: 
      <span className='value'>{fieldValue}</span>
    </p>
  )
}

const IdCard = (props) => {
  const { firstName, lastName, gender, height, picture } = props;
  const person = [
    { 'First name': firstName },
    { 'Last name': lastName },
    { 'Gender': gender },
    { 'Height': height }
  ];
  console.log('unique', uniqueId());
  return (
    <div>
      <img src={picture} alt='portrait' />
      {person.map((field) => {
        return <FieldNameAndValue
          key={uniqueId()}
          fieldName={Object.keys(field)}
          fieldValue={Object.values(field)} />
      })}
    </div>
  )
}

export default IdCard;
