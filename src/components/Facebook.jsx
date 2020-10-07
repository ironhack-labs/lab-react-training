import React, { Component } from 'react';
import berlinJSON from  '../data/berlin.json';


class Facebook extends Component {

    state = {
        contacts: berlinJSON,
        isSelected: false,
        country: "",
        lastName: "",
    }


    handleChange = (evt) => {
      const value = evt.target.value;
      // const key = evt.target.name;

      this.setState({        
       // contacts: this.state.contacts.filter((contact, index) => new RegExp(value,"gi").test(contact.lastname) )
        contacts: this.state.contacts.filter(({contact})=> new RegExp(evt.target.value,"gi").test(contact))
      });
    };


    // handleSubmit = (event) => {
    //   event.preventDefault();

    // }

    toggleSelectedBtn(countrySelect){
     if(countrySelect){
       this.setState({ 
         isSelected: !this.isSelected,
         country: countrySelect,
        });
      } else {
        ///MOue
      let countryTmp = [];
      berlinJSON.forEach(line => countryTmp.push(line.country));
      let uniqueContactCountry = [...new Set(countryTmp)];

        this.setState({ 
         isSelected: !this.isSelected,
         country: uniqueContactCountry,
        });
      }
    };

    sortByLastName() {
      this.setState({
          contacts: [...this.state.contacts].sort((a, b) => a.lastName < b.lastName ? -1 : 1)
        })
    };

    render() {
      let countryTmp = [];
      berlinJSON.forEach(line => countryTmp.push(line.country));
      let uniqueContactCountry = [...new Set(countryTmp)];

        return (
            <div className="main-wrap-facebook">

          <div className="navBtn">
          <button onClick={(event) => this.sortByLastName()}>Sort by lastName</button>
         
          <input
          // onChange={this.handleUsername}
          onChange={this.handleChange}
          value={this.state.lastname}
          id="lastname"
          autoComplete="off"
          className="input"
          type="text"
          name="lastname"
        />

         
          </div>

            <button style={{backgroundColor: this.state.isSelected && !(typeof this.state.country === "string")  ? "dodgerBlue" : "" }} onClick={(event) =>  this.toggleSelectedBtn() }>All</button>
            {uniqueContactCountry.map((country, index) => (
              <button style={{backgroundColor: this.state.isSelected && this.state.country === country ? "dodgerBlue" : "" }}
              key={index} onClick={(event) =>  this.toggleSelectedBtn(country) }>{country}</button>
            ))}

            <div className= "button-bar-facebook">  
            </div>
            {this.state.country}
            {this.state.contacts.map((contact, index) => (
              <div className="Profile" key={index} style={{backgroundColor: this.state.country.includes(contact.country) ? "dodgerBlue" : "" }}>
                <img src={contact.img} alt="" />
                <div>
                  <div>First name: {contact.firstName}</div>
                  <div>Last name:{contact.lastName}</div>
                  <div>Country:{contact.country}</div>
                  <div>Type: {contact.isStudent ? "Student" : "Teacher"}</div>
                </div>
              </div>
            ))}
          </div>
        )
    }
}

export default  Facebook;