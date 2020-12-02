import profiles from '../../data/berlin.json';
import './FaceBook.css';
import React, { Component } from 'react';

export default class Facebook extends Component {

    

    render() {
        return (
            <div>
                
            </div>
        )
    }
}


// export default function Facebook() {
//     console.log(profiles)

//     const buttons = profiles.map(profile => {
//         return (
//             <button onClick={ this.clickHandler }> { profile.country } </button>
//         )
//     })

//     const display = profiles.map(profile => {
//         return (
//             <div className=".card">
//                 <div className="card-img">
//                     <img src={ profile.img } alt="profile picture" />
//                 </div>
//                 <div className="card-text">
//                         <p><strong>First name:</strong> { profile.firstName } </p>
//                         <p><strong>Last Name:</strong> { profile.lastName }</p>
//                         <p><strong>Country: </strong>{ profile.country } </p>
//                         <p><strong>Type:</strong> { profile.type } </p>
//                 </div>
//             </div>
//         )
//     })

//     return (
//         <>
//             <div>
//                 { buttons }
//             </div>
//             { display }
//         </>
//     )
// }
