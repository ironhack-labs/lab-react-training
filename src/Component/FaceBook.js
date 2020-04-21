import React, { Component } from 'react'
import profiles from '../data/berlin.json';

class FaceBook extends Component{
    isTeacher = (isStudent) => {
        if (isStudent === false ){
            return 'Teacher';
        }else {
            return 'Student';
        }
    };
    render(){
        return(
            <div>
                {profiles.map(item =>(
                <div className='facebook'> 
                <div className='imgBox'>
                  <img className='img' src={item.img}></img>
                  </div>
                  <div className='info'> 
                      <p><b>First Name:</b>{item.firstName}</p>
                      <p><b>Last Name:</b> {item.lastName}</p>
                      <p><b>Country:</b> {item.country}</p>
                      <p><b>Type:</b> {this.isTeacher(item.isStudent)}</p>
                  </div>
                </div>
                ))}

            </div>
        )
    }

}




export default FaceBook;