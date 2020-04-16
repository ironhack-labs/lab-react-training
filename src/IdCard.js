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
        <h4> First name: {this.props.firstName}</h4>
        <h4> Last name: {this.props.lastName}</h4>
        <h4> Gender: {this.props.gender}</h4>
        <h4> Height: {this.props.height}</h4>
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