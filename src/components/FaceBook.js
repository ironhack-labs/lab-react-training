import React from 'react';
import profiles from '../data/berlin.json';

class FaceBook extends React.Component {
    state = {
        selectedCountry: "",

    }

  eleGenerator(el) {
    return (
      <div className="border IdCard">
        <img src={el.img} alt="profile" onClick={(event) => this.showInfo(event)}/>
        <div className="card-content hide">
          <span>
            <strong>First name</strong>: {el.firstName}
          </span>
          <span>
            <strong>Last name</strong>: {el.lastName}
          </span>
          <span>
            <strong>Country</strong>: {el.country}
          </span>
          {/* <span><strong>Type</strong>: {el.type}</span> */}
        </div>
      </div>
    );
  }

  showInfo = (event) => {
      const divInfo = event.target.nextSibling;
      divInfo.classList.toggle("hide");
  }

  clickHandler = (event) => {
      const country = event.target.innerText;
      this.setState(() => ({
        selectedCountry: country
      }))
  }

  render() {
    const profileList = profiles.map((profile, index) => {
        const color = profile.country === this.state.selectedCountry ? '#8ac4d0' : 'white';
      return (
        <li key={index} className="profile" style={{backgroundColor:`${color}`}}>
          {this.eleGenerator(profile)}
        </li>
      );
    });

    const countries = [...new Set(profiles.map(profile => profile.country))].map((country, index) => {
        return(
            <button className="country-btn" key={index} onClick={(event) => this.clickHandler(event)}>{country}</button>
        )
    })

    return (
        <>
            {countries}
            <ul>{profileList}</ul>
        </>
    );
  }
}

export default FaceBook;
