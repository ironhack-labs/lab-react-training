import React, { Component } from "react";

// class IdCard extends Component {
//   render() {
//     return (
//       <div className="person">
//         <img src={this.props.picture} alt="" />
//         <div className="person__personal-information">
//           <p>
//             <span className="personal-information__title">First Name: {this.props.firstName}</span>
//           </p>
//           <p>
//             <span className="personal-information__title">Last Name: {this.props.lastName}</span>
//           </p>
//           <p>
//             <span className="personal-information__title">Gender Name: </span>
//           </p>
//           <p>
//             <span className="personal-information__title">Hegiht Name: </span>
//           </p>
//           <p>
//             <span className="personal-information__title">Birth Name: </span>
//           </p>
//           <p>
//             <span className="personal-information__title">First Name: </span>
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

function IdCard(info) {
  return (
    <div className="person">
      <img src={info.picture} alt="" />
      <div className="person__personal-information">
        <p>
          <span className="personal-information__title">
            First Name: {info.firstName}
          </span>
        </p>
        <p>
          <span className="personal-information__title">
            Last Name: {info.lastName}
          </span>
        </p>
        <p>
          <span className="personal-information__title">Gender Name: </span>
        </p>
        <p>
          <span className="personal-information__title">Hegiht Name: </span>
        </p>
        <p>
          <span className="personal-information__title">Birth Name: </span>
        </p>
        <p>
          <span className="personal-information__title">First Name: </span>
        </p>
      </div>
    </div>
  );
}

export default IdCard;
