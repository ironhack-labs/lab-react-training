import React from 'react'



/* const IdCard = (props) => {
    return (
              <div>
              <p>First Name : {props.firstName}</p>
              <p>Last Name : {props.lastName}</p>
              <p>Gender : {props.gender}</p>
              <p> Height : {props.height/100}m</p>
              <p>Birth : {props.birth.getDate()} {props.birth.getMonth()}</p>
              </div>
          
    )
} */

class IdCard extends React.Component {
       
    render() {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      return <div>
        <p>First Name : {this.props.firstName}</p>
        <p>Last Name : {this.props.lastName}</p>
        <p>Gender : {this.props.gender}</p>
        <p> Height : {this.props.height/100}m</p>
        <p>Birth : {days[this.props.birth.getDay()]} {month[this.props.birth.getMonth()]} {this.props.birth.getDate()} {this.props.birth.getFullYear()}</p>
        <img src={this.props.picture} alt="profileimg"></img>
      </div>;
    }
  }
export default IdCard
