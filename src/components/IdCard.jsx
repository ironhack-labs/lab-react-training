import React from 'react';

// fucntional component, no destructuring

// const IdCard = (props) => {
//   return (
//     <div class="profileContent">
//       <img src={props.picture} alt="Profile Picture" class="profilePicture" />
//       <ul class="list">
//         <li>
//           <span class="bold">First name: </span>
//           {props.firstName}
//         </li>
//         <li>
//         <span class="bold">Last name: </span>
//             {props.lastName}</li>
//         <li>
//         <span class="bold">Gender: </span>
//             {props.gender}</li>
//         <li>
//         <span class="bold">Height: </span>
//             {props.height}</li>
//         <li>
//         <span class="bold">Birthdate: </span>
//             {props.birth.toUTCString()}</li>
//       </ul>
//     </div>
//   );
// };

// functional component, with destructuring
const IdCard = ({ picture, firstName, lastName, gender, height, birth }) => {
  return (
    <div class="profileContent boxFrame">
      <img src={picture} alt="Profile Picture" class="profilePicture" />
      <ul class="list">
        <li>
          <span class="bold">First name: </span>
          {firstName}
        </li>
        <li>
          <span class="bold">Last name: </span>
          {lastName}
        </li>
        <li>
          <span class="bold">Gender: </span>
          {gender}
        </li>
        <li>
          <span class="bold">Height: </span>
          {height}
        </li>
        <li>
          <span class="bold">Birthdate: </span>
          {birth.toUTCString()}
        </li>
      </ul>
    </div>
  );
};

export default IdCard;
