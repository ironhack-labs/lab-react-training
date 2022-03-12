import { useState } from 'react';

function FacebookCard(props) {
  const [elementIndex, setelementIndex] = useState();

  function handleImgClick(index) {
    setelementIndex(index);
  }

  const cardStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    border: 'solid 2px black',
    width: '600px',
    padding: '20px',
    marginBottom: '20px',
  };

  const hidden = {
    display: 'none',
  };
  const cardTextStyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    marginLeft: '20px',
  };
  const imgStyle = {
    width: '200px',
    height: '200px',
  };

  const mappedProfiles = props.profiles.map((element, index) => {
    return (
      <div
        key={index}
        style={{
          ...cardStyle,
          backgroundColor:
            element.country === props.countryValue ? 'blue' : 'white',
        }}
      >
        <img
          src={element.img}
          alt="img"
          style={imgStyle}
          onClick={(e) => handleImgClick(index)}
        />
        <div id={index} style={elementIndex === index ? cardTextStyle : hidden}>
          <span>
            <strong>First Name: </strong>
            {element.firstName}
          </span>
          <span>
            <strong>Last Name: </strong>
            {element.lastName}
          </span>
          <span>
            <strong>Country: </strong>
            {element.country}
          </span>
          <span>
            <strong>Type: </strong>
            {element.isStudent ? 'student' : 'teacher'}
          </span>
        </div>
      </div>
    );
  });

  return <div>{mappedProfiles}</div>;
}

export default FacebookCard;
