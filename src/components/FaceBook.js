import React from 'react';
import profiles from '../data/berlin.json';

class FaceBook extends React.Component {

    eleGenerator(el) {
        return (
            <div className="border IdCard">
                <img src={el.img} alt="profile"/>
                <div className="card-content">
                    <span><strong>First name</strong>: {el.firstName}</span>
                    <span><strong>Last name</strong>: {el.lastName}</span>
                    <span><strong>Country</strong>: {el.country}</span>
                    {/* <span><strong>Type</strong>: {el.type}</span> */}
                </div>
            </div>
        )
    }

    render() {
        const profileList = profiles.map((profile, index) => {
            return(
                <li key={index} className="profile">
                    {this.eleGenerator(profile)}
                </li>
            )
        })

        return (
            <ul>
                {profileList}
            </ul>
        );
    }
}

export default FaceBook;