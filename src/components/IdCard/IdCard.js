import React from 'react';

// const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
//   return (
//     <article className="idCard">
//       <img src={picture} alt="picture" />
//       <div>
//         <p><span>First Name:</span> {firstName}{' '}</p>

//         <p><span>Last Name:</span> {lastName}</p>

//         <p><span>Gender:</span> {gender}</p>
          
//         <p> <span>Height:</span> {height}</p>
         
//         <p><span>Birth:</span>{birth}</p>     
        
//       </div>
//     </article>
//   );
// };




class IdCard extends React.Component {
    constructor(props) {
      super(props);
      this.lastName = this.props.lastName;
      this.firstName = this.props.firstName;
      this.gender = this.props.gender;
      this.height = this.props.height;
      this.birth = this.props.birth;
      this.picture = this.props.picture;
    }
  
    render() {
      return (
    <article className="idCard">
      <img src={picture} alt="picture" />
      <div>
        <p><span>First Name:</span> {this.firstName}{' '}</p>

        <p><span>Last Name:</span> {this.lastName}</p>

        <p><span>Gender:</span> {this.gender}</p>
          
        <p> <span>Height:</span> {this.height}</p>
         
        <p><span>Birth:</span>{this.birth}</p>     
        
      </div>
    </article>
      );
    }
  }









export default IdCard;