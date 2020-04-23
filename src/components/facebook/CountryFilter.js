import React, {Component} from 'react'
import '../facebook/FaceBook.css'

class CountryFilter extends Component {

  state = {
      filterCountry: ""
  }

  render(){
    const {countries, func} = this.props;
    const countryForFilter = countries.map((country)=>{
      return <button key={country} className="btn-country" onClick={func(country)}>{country}</button>
      })

    return(
      <div>

        <h2>{countryForFilter}</h2>
        {/* como retorno esto? sin etiquetas a la función */}

      </div>
    )
  }
}

export default CountryFilter
