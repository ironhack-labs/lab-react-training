import React from 'react';

class IdCard extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     age: 26    
  //   }
  // }
  
  render() {
    return (
      <div>
        <img src= {this.props.picture} />
        <h3> First name: {this.props.firstName}</h3>
        <h3> Last name: {this.props.lastName}</h3>
        <h3> Gender: {this.props.gender}</h3>
        <h3> Height: {this.props.height}</h3>
        {/* <h2> Birth: {this.props.birth}</h2> */}
        {/* <p>Mi edad es {this.state.age}</p> */}
        {/* <button onClick= { () => this.setState({age: this.state.age})}>Aumentar</button>*/}
      </div> 
    )
  }
}

// function IdCard(props) {
//   return <h1>Mi nombre es {props.name}</h1>
// }

export default IdCard;