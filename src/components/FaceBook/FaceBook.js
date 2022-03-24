import './FaceBook.scss'
import profiles from '../../data/berlin.json';
import { Component } from 'react';

class FaceBook extends Component {
    state = {
      countries: [],
      choosenCountry: ''
  }
  
  componentDidMount(){
    this.countryFilter();
  }

  countryFilter = () => {
    const countries = [];

    profiles.filter(profile => {
      if (countries.indexOf(profile.country) === -1) {
        countries.push(profile.country)
      }
    })

    this.setState({
      countries: countries
    })
  }

  selectCountry = (country) => {
    if (this.state.choosenCountry === '') {
      this.setState({
        choosenCountry: country  
      })
    } else {
      this.setState({
        choosenCountry: ''  
      })
    }
  }

    
    render() {
      const { choosenCountry } = this.state
      
      return (
        <div>

          <div className="country-btn">
            {this.state.countries.map((country, index) => {
              return (
                <button className="country-btn__single" key={index} onClick={() => this.selectCountry(country)}>{country}</button>
              )
              
            })}
          </div>

          {profiles.map(({ firstName, lastName, country, img, isStudent }, index) => {
            return (
              <div className="profile" key={index} style={{backgroundColor: choosenCountry === country ? 'aquamarine' : 'white'}}>
                <div className="profile__img">
                  <img className="profile__photo" src={img} alt="profile pic" />
                </div>

                <div className="profile__info">
                  <p><strong>First name:</strong> {firstName}</p>
                  <p><strong>Last Name:</strong> {lastName}</p>
                  <p><strong>Country:</strong> {country}</p>
                  <p><strong>Type:</strong> {isStudent ? 'Student' : 'Teacher'}</p>
                </div> 
              </div> 
            )
            })
          }

        </div>
      )
    }
  }
  

export default FaceBook


