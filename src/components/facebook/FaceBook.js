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
      filterIndex : 0
    }
  }

  componentDidMount(){
    //se puede llamar desde aqui a otro component?
    let newCountry = []
    profiles.map((profile) => {
      return newCountry.includes(profile.country) ? console.log("Already exist") : newCountry.push(profile.country)  //Como puedo evitar tener que poner una condicion que no se quiero que se cumpla para llegar al else?
     })
    this.setState({
      countries : newCountry,
    })
  };
  
  filterBycountry(country){
    const {countries} = this.state;
    console.log(country)
    console.log(this.state.countries)
    const filterCountry = [];
    for(let i=0; i<countries.length;i++){
      if(countries[i]===country){
        filterCountry.push(i)
      }
    }
  
  this.setState({
    filterIndex: filterCountry
  })
  }

  applyStyle(){
    const style = { 
      background: `aqua`,
      border: '1px solid',
      fontSize: '30px',
      margin: '20px 30px',
      textAlign: 'center',
      padding: '30px',
   };
    return style
  }

  render(){
    const {countries, filterIndex} = this.state;

    return(
      <div>
        {countries.map((country)=>{
          return <button key={country} className="btn-country" onClick={()=>this.filterBycountry(country)}>{country}</button>
          })
        }

        {profiles.map((profile, index) => {
          if(filterIndex[index]===index){
            return (
            <div style={this.applyStyle} className="orderProfiles" key={profile.firstName}>
              <CardProfile profile={profile} />
            </div>
            )} else {
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