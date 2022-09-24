import { Component } from 'react';
import './Facebook.css';
import profiles from '../../data/berlin.json';

class Facebook extends Component {
    state = {
        countrySelected: null,
    }

    listCountries = () => {
        const countries = [...new Set(profiles.map((profile) => profile.country))];     
        return countries;
    }   

    selectCountry = (location) => {
        this.setState({countrySelected: location});
    }

    render () {     
        return (
          <div className="Facebook-container">
            {/* En el onClick en vez de pasar como paramentro el country mejor recibirlo como el event.target.value en la función, así no llamo la función  */}
            <div className="Btns-countries-container">
              {this.listCountries().map((country) => {
                return <button onClick={() => this.selectCountry(country)} key={country}>{country}</button>;
              })} 
            </div>

            {profiles.map(({ firstName, lastName, country, img, isStudent }, i) => {
              return (
                <div
                  style={
                    this.state.countrySelected === country
                      ? { backgroundColor: 'black', color: 'white' }
                      : { backgroundColor: 'white', color: 'black' }
                  }
                  className="Profile-container"
                  key={i}
                >
                  <img src={img} alt=""></img>
                  <div>
                    <h3>
                      {firstName} {lastName}
                    </h3>
                    <p>{country}</p>
                    <p>{isStudent ? 'Role: Student' : 'Role: Teacher'}</p>
                  </div>
                </div>
              );
            })}
          </div>
        );
    }
}

export default Facebook;




