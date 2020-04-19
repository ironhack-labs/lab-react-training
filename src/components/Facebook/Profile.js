import React, {Component} from 'react';
import './Facebook.css';

class Profile extends Component {
  selectedCountry = (countrySelected) => {
    const { country } = this.props;
    if (country === countrySelected) {
      return 'blue';
    } else {
      return 'white';
    }
  }
  render(){
    const { img, name, lastname, country, type, selectedCountry } = this.props;
    return(
      <div className="Profile" style={{ 'backgroundColor': (selectedCountry === country ? '#a3d2e2' : 'white') }}>
      <img src={img} alt='' />
      <div>
        <p><span className="Strong">First name:</span> {name}</p>
          <p><span className="Strong">Last name:</span>  {lastname}</p>
          <p><span className="Strong">Country:</span>  {country}</p>
          <p><span className="Strong">Type:</span>  {type}</p>
      </div>
    </div>)
  }
}

export default Profile;
