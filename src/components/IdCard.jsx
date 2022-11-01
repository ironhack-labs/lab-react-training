import React from 'react';

function IdCard() {
  const peopleArr = [
    {
      _id: 123,
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date('1992-07-14'),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      _id: 445,
      lastName: 'Delores ',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date('1988-05-11'),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  const cardStyle = {
    border: '1px solid black',
    display: 'flex',
    padding: '20px',
    gap: '20px'
  };
  return (
    <div>
      <h3>Id Card</h3>
      <div>
        {peopleArr.map((eachCard) => {
          return (
            <div key={eachCard._id} style={cardStyle}>
              <img src={eachCard.picture} alt="picture" />
              <div>
                <p>LastName: {eachCard.lastName}</p>
                <p>FirstName: {eachCard.firstName}</p>
                <p>Gender: {eachCard.gender}</p>
                <p>Height: {eachCard.height}m</p>
                <p>Birth: {eachCard.birth.toLocaleDateString()}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IdCard;
