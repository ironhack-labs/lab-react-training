import React from 'react';
import "./IdCard.css";

export default class IdCard extends React.Component {
    render() {
    const user = this.props;
    return (
      <div className="IdCard">
        <img class='idCardImage'src={user.picture} alt="user photo" />
        <section>
        <p>
           <strong>First name:</strong> {user.firstName}
        </p>
        <p>
           <strong>Last name:</strong> {user.lastName}
        </p>
        <p>
           <strong>Gender:</strong> {user.gender}
        </p>
        <p>
           <strong>Height:</strong> {user.height}
        </p>
        <p>
           <strong>Birth:</strong> {user.birth.toDateString()}
        </p>
        </section>      
      </div>
    );
   }
  }