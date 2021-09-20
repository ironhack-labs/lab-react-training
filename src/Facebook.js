
import React, { Component } from 'react';
import {profiles} from './data/berlin.json';


class Facebook extends Component {
    render() {
        const profileList = profiles;
        return (
            <div>
                {profiles}
            </div>
        );
    }
}

export default Facebook;

// import React, { Component } from 'react'
// import profiles from './data/berlin.json';

// const initialState = () => {
//     let list = [];
//     profiles.map(profile => {
//         if (!list.includes(profile.country)) {
//             list.push(profile.country)
//         }
//     })
//     return list;
// };

// export default class Facebook extends Component {
//     state = {
//         countries: initialState(),
//         selected: []
//     }
//     selectCountry = (event) => {
//         const clickedCountry = event.target;
//         if (this.state.selected.includes(clickedCountry.innerText)) {
//             const countriesCopy = [...this.state.selected];
//             const index = countriesCopy.indexOf(clickedCountry.innerText);
//             countriesCopy.splice(index, 1);
//             event.target.style.backgroundColor = "#fff";
//             this.setState((state) => ({
//                 selected: countriesCopy
//             }))
//         } else {
//             event.target.style.backgroundColor = "#7A89C2";
//             this.setState((state) => ({
//                 selected: [clickedCountry.innerText, ...state.selected]
//             }))
//         }
//     }
//     style = (country) => {
//         if (this.state.selected.includes(country)) {
//             return '#7A89C2'
//         }
//         else {
//             return '#000'
//         }
//     }
//     render() {
//         const list = profiles.map(profile => {
//             return(
//                 <div className="facebook-card" key={`${profile.firstName}-${profile.lastName}`} style={{backgroundColor: this.style(profile.country)}} >
//                     <img src={profile.img} alt="profile picture"/>
//                     <div className="facebook-card-description">
//                         <p><span>First name: </span>{profile.firstName}</p>
//                         <p><span>Last name: </span>{profile.lastName}</p>
//                         <p><span>Country: </span>{profile.country}</p>
//                         <p><span>Type: </span>{profile.isStudent ? 'Student' : 'Teacher'}</p>
//                     </div>
//                 </div>
//             )
//         })

//         const search = this.state.countries.map(country => {
//             return (<button onClick={this.selectCountry} key={country}>{country}</button>)
//         })

//         console.log(this.state.countries)
//         return (
//             <>
//                 {search}
//                 {list}
//             </>
//         )
//     }
// }
