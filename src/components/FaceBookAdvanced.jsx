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

    setCountries((old) => {
      return { ...old, [country]: !old[country] };
    });
  };

  return (
    <>
      <h2>AdvancedFacebook</h2>
      <ButtonContainer>
        {Object.keys(countriesObject).map((country) => (
          <Button
            {...{ countries, country }}
            // countries={countries}
            // country={country}
            onClick={() => {
              handleClick(country);
            }}
            key={country}
          >
            {country}
          </Button>
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

const Button = styled.button`
  margin: 2px;

  background-color: ${({ countries, country }) =>
    countries[country] ? 'lightblue' : 'white'};
`;

const Card = styled.div`
  width: 320px;
  border-radius: 5px;
  display: flex;
  border: 1px solid grey;
  padding: 10px;
  margin: 10px;
  background-color: ${(props) => (props.checked ? 'lightblue' : 'white')};
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
