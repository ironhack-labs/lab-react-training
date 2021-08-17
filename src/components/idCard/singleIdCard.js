import React from 'react';

class SingleIdCard extends React.Component {
  idCardsArr = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: '178',
      //   birth: new Date('1992-07-14'),
      picture:
        'https://i.pinimg.com/736x/f8/2f/ba/f82fbac7514f944aacc0257445c1f89e.jpg',
    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: '172',
      //   birth: new Date('1988-05-11'),
      picture:
        'https://cdn3.vectorstock.com/i/1000x1000/52/87/young-beautiful-business-woman-cartoon-character-vector-35865287.jpg',
    },
  ];
  render() {
    return (
      <>
        {this.idCardsArr.map((elm) => {
          return (
            <div className="singleCard">
              <img src={elm.picture} alt={elm.firstName + 'picture'} />
              <div>
                <p>
                  <strong>First Name: </strong>
                  {elm.firstName}
                </p>
                <p>
                  <strong>Last Name: </strong>
                  {elm.lastName}
                </p>
                <p>
                  <strong>Gender: </strong>
                  {elm.gender}
                </p>
                <p>
                  <strong>Height: </strong>
                  {elm.height + 'cm'}
                </p>
                {/* <p>
                  <strong>DOB: </strong>
                  {elm.birth}
                </p> */}
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export { SingleIdCard };
