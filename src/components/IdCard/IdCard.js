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
         
//         <p><span>Birth:</span>{birth.getFullYear() + "-"+(birth.getMonth() + 1) + "-" + birth.getDate();}</p>     
        
//       </div>
//     </article>
//   );
// };



class IdCard extends React.Component {
    constructor(props) {
      super(props);
     
    }

    getDate(){
        return this.props.birth.getFullYear() + "-"+(this.props.birth.getMonth() + 1) + "-" + this.props.birth.getDate();
    }
  
    render() {
      return (
    <article className="idCard">
      <img src={this.props.picture} alt="picture" />
      <div>
        <p><span>First Name:</span> {this.props.firstName}{' '}</p>

        <p><span>Last Name:</span> {this.props.lastName}</p>

        <p><span>Gender:</span> {this.props.gender}</p>
          
        <p> <span>Height:</span> {this.props.height}</p>
         
        <p><span>Birth:</span>{this.getDate()}</p>     
        
      </div>
    </article>
      );
    }
  }









export default IdCard;