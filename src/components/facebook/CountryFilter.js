import React, {Component} from 'react'
import '../facebook/FaceBook.css'
import profiles from '../../data/berlin.json';
import CardProfile from './CardProfile';

class CountryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries : [],
    }
  }

  componentDidMount(){
    let newCountry = []
    profiles.map((profile) => {
      return newCountry.includes(profile.country) ? console.log("Already exist") : newCountry.push(profile.country)  //Como puedo evitar tener que poner una condicion que no se quiero que se cumpla para llegar al else?
     })
    this.setState({
      countries : newCountry,
    })
  };
  

  render(){
    const {countries} = this.state;

    return(
      <div>
        {countries.map((country)=>{
          return <button key={country} className="btn-country">{country}</button>
          })
        }

        {profiles.map((profile, index) => {
          return (
            <div className="orderProfiles" key={profile.firstName}>
              <CardProfile profile={profile} />
            </div>
          )        
        })}
      </div>
    )
  }
}

export default CountryFilter