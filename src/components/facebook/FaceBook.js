import React, {Component} from 'react'
import '../facebook/FaceBook.css'
import profiles from '../../data/berlin.json';
import CardProfile from './CardProfile';

// {"firstName": "Aaron", "lastName": "Newell", "country": "England", "img": "https://i.imgur.com/CFgX3Xx.png", "isStudent": false},

class FaceBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries : [],
      filterCountry : 0
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
  
  filterBycountry(country){  
    this.setState({
      filterCountry: country
    })
  }

  render(){
    const {countries, filterCountry} = this.state;

    return(
      <div>
        {countries.map((country)=>{
          return <button key={country} className="btn-country" onClick={()=>this.filterBycountry(country)}>{country}</button>
          })
        }

        {profiles.map((profile) => {
          if(filterCountry.length>0){
            if(profile.country===filterCountry){
              return (
              <div className="orderProfiles" key={profile.firstName}>
                <CardProfile profile={profile} style={{backgroundColor: '#A3D2E3'}} />
              </div>
              )
            } else {
                return (
                <div className="orderProfiles" key={profile.firstName}>
                  <CardProfile profile={profile} />
                </div>
              )
            }
 
          } else {
            return (
              <div className="orderProfiles" key={profile.firstName}>
                <CardProfile profile={profile} />
              </div>
            )        
          }
          
        })}
      </div>
    )
  }
}

export default FaceBook