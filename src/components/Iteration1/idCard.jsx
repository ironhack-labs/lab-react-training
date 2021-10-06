import React from 'react';

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <li className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md flex">
      <img className="h-20 w-20 rounded-full" src={picture} alt="" />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">
          <strong>First Name: </strong> {firstName}
        </p>
        <p className="text-sm font-medium text-gray-900">
          <strong>Last Name: </strong>
          {lastName}
        </p>
        <p className="text-sm font-medium text-gray-900">
          <strong>Gender: </strong>
          {gender}
        </p>
        <p className="text-sm font-medium text-gray-900">
          <strong>Height: </strong>
          {height / 100} m
        </p>
        <p className="text-sm font-medium text-gray-900">
          <strong>Birth: </strong>
          {birth.toLocaleDateString()}
        </p>
      </div>
    </li>
  );
};

export default IdCard;
