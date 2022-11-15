import profiles from '../data/berlin.json';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import { BoldSpan } from './Styles';
import styled from 'styled-components';

const profilesWithIds = profiles.map((profile) => ({
  ...profile,
  id: uuidv4(),
  checked: false,
}));

// create buttons
const countriesObject = profilesWithIds.reduce((acc, val) => {
  if (!acc[val.country]) acc[val.country] = false;
  return acc;
}, {});

function FaceBookAdvanced() {
  const [user, setUser] = useState(profilesWithIds);
  const [countries, setCountries] = useState(countriesObject);

  const handleClick = (country) => {
    const updatedUsers = user.map((user) => {
      if (user.country === country) {
        user.checked = !user.checked;
      }
      return user;
    });
    setUser(updatedUsers);

    const updatedCountries = countries;
    updatedCountries[country] = !updatedCountries[country];

    setCountries(updatedCountries);
  };

  return (
    <>
      <h2>AdvancedFacebook</h2>
      <ButtonContainer>
        {Object.keys(countriesObject).map((country) => (
          <button
            onClick={() => {
              handleClick(country);
            }}
            style={{
              margin: '2px',
              backgroundColor: countries[country] ? 'lightblue' : 'white',
            }}
            key={country}
          >
            {country}
          </button>
        ))}
      </ButtonContainer>

      <FlexWrapDiv>
        {profilesWithIds.map((profile) => {
          return (
            <Card checked={profile.checked} key={profile.id}>
              <img src={profile.img} alt={profile.firstName} />
              <Credentials>
                <p>
                  <BoldSpan>First name: </BoldSpan>
                  {profile.firstName}
                </p>
                <p>
                  <BoldSpan>Last name: </BoldSpan>
                  {profile.lastName}
                </p>
                <p>
                  <BoldSpan>Country: </BoldSpan>
                  {profile.country}
                </p>
                <p>
                  <BoldSpan>Type </BoldSpan>
                  {profile.isStudent ? 'Student' : 'Teacher'}
                </p>
              </Credentials>
            </Card>
          );
        })}
      </FlexWrapDiv>
    </>
  );
}
export default FaceBookAdvanced;

const ButtonContainer = styled.div`
  max-width: 300px;
`;

// const Button = styled.button`
//   margin: '2px',
//   backgroundColor: ${(props) =>
//     props.countries[props.country] ? 'lightblue' : 'white'};

// `;

const Card = styled.div`
  width: 320px;
  border-radius: 5px;
  display: flex;
  border: 1px solid grey;
  padding: 10px;
  margin: 10px;
  color: ${(props) => props.checked};
  > img {
    width: 120px;
    height: 120px;
  }
`;

const Credentials = styled.div`
  margin-left: 10px;
  > p {
    margin: 5px;
  }
`;

const FlexWrapDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// Without styled Components - backgroundColor onclick working

// import profiles from '../data/berlin.json';
// import { v4 as uuidv4 } from 'uuid';
// import { useState } from 'react';

// const profilesWithIds = profiles.map((profile) => ({
//   ...profile,
//   id: uuidv4(),
//   checked: false,
// }));

// // create buttons
// const countriesObject = profilesWithIds.reduce((acc, val) => {
//   if (!acc[val.country]) acc[val.country] = false;
//   return acc;
// }, {});

// function FaceBookAdvanced() {
//   const [user, setUser] = useState(profilesWithIds);
//   const [countries, setCountries] = useState(countriesObject);

//   const handleClick = (country) => {
//     const updatedUsers = user.map((user) => {
//       if (user.country === country) {
//         user.checked = !user.checked;
//       }
//       return user;
//     });
//     setUser(updatedUsers);

//     const updatedCountries = countries;
//     updatedCountries[country] = !updatedCountries[country];

//     setCountries(updatedCountries);
//   };

//   return (
//     <>
//       <h2>AdvancedFacebook</h2>
//       <div className="btn-container">
//         {Object.keys(countriesObject).map((country) => (
//           <button
//             onClick={() => {
//               handleClick(country);
//             }}
//             style={{
//               margin: '2px',
//               backgroundColor: countries[country] ? 'lightblue' : 'white',
//             }}
//             key={country}
//           >
//             {country}
//           </button>
//         ))}
//       </div>

//       <div className="facebook-container">
//         {profilesWithIds.map((profile) => {
//           return (
//             <div
//               style={{
//                 backgroundColor: profile.checked ? 'lightblue' : 'white',
//               }}
//               className="card"
//               key={profile.id}
//             >
//               <img src={profile.img} alt={profile.firstName} />
//               <div className="credentials">
//                 <p>
//                   <span className="bold">First name: </span>
//                   {profile.firstName}
//                 </p>
//                 <p>
//                   <span className="bold">Last name: </span>
//                   {profile.lastName}
//                 </p>
//                 <p>
//                   <span className="bold">Country: </span>
//                   {profile.country}
//                 </p>
//                 <p>
//                   <span className="bold">Type </span>
//                   {profile.isStudent ? 'Student' : 'Teacher'}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }
// export default FaceBookAdvanced;
