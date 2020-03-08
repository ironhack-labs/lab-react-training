/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import profiles from '../../data/berlin.json';



class Facebook extends Component {
  constructor(){
    super();
    this.state = {
      profiles: profiles
    };
  
  }

   
  render() {
    // const { img,
    //         imgClicked,
    //         } = this.props;

    const divStyle = {
      border: '3px solid black',
      display:'flex',
      width: '30em',
      height:'auto',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '2em 0'
    };

    const imgStyle = {
      width: '15em',
      height:'auto',
      paddingLeft:'1em',
      paddingRight:'1em'
    }

    

    
    return( 
      <div className="App">
        {this.state.profiles.map( profile => {
          return (
            <div style={divStyle}>

              <div>
                <img style={imgStyle} src={profile.img} />
              </div>

              <div>
                <span><strong>First Name: </strong> {profile.firstName} </span>
                <br></br>
                <span><strong>Last Name: </strong> {profile.lastName} </span>
                <br></br>
                <span><strong>Country: </strong> {profile.country} </span>
                <br></br>
                <span><strong>Type: </strong> {profile.isStudent ? 'Student' : 'Teacher'} </span>
              </div>

            </div>
          )        
        })}
       
      </div>
    );
  }
};


export default Facebook;