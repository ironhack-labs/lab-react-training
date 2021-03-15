import React from 'react'; // Snippet shortcut => rafce | rfce

function IdCard(props) {
  console.log(props);

  //   if (props.age < 20) return null;

  return (
    <div className="idCard">
      <p>{props.lastName}</p>
      <p>{props.firstName}</p>
      <p>Gender :{props.gender}</p>
      <p>Height :{props.height}</p>
      <p>Birth :{new Date (props.birth).toDateString()}</p>
      <img src={props.picture} alt="pic"/>
    </div>
  );
}

export default IdCard;
