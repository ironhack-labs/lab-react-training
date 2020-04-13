import React, {Component} from 'react';
import './style.css';
import profiles from '../../data/berlin.json';
import IdCardFacebook from "../idCardFacebook/IdCardFacebook";

class FaceBook extends Component {

  state = {
    country: 'All',
    filter: '',
  };

  _changeCountry = (country) => {
    this.setState({
      country: country,
    })
  };

  _getCountryButtons() {
    const countries = this._getAvailableCountries();
    return countries.map((element, index) => <button onClick={() => this._changeCountry(element)} key={index}>{element}</button>)
  }
  _getAvailableCountries() {
    return [...new Set(profiles.map(element => element.country))];
  }
  _filter = (value) => {
    this.setState({
      filter: value,
    })
  };

  render() {
    const elements = profiles.map( (element, index) => <IdCardFacebook className={this.state.country === element.country || (element.firstName.includes(this.state.filter) && this.state.filter !== '' ) ? 'active' : ''} key={index} firstName={element.firstName} img={element.img} lastname={element.lastName} country={element.country} type={element.type} />);
    return (
      <div className={'facebook'}>
        <nav>
          <input onKeyUp={(e) => this._filter(e.currentTarget.value)} type="text" placeholder={'Search'}/>
          {this._getCountryButtons()}
        </nav>
        <div className={'elements'}>
          { elements }
        </div>
      </div>
    );
  }
}

export default FaceBook;