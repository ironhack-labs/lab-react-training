import React, { Component } from 'react'
import profiles from '../data/berlin.json';

class ButtonCountry extends Component {
    state = {
        profilelist: profiles,
        filtered: this.props.init
    }

    filterByCountry = (country) => {
        let countrylist = [...this.state.profilelist];
        let filtereditem = country.toLowerCase();
        let newcountrylist = countrylist.filter(item => {
            const lc = item.country.toLowerCase();
            // const filter = country;
            //console.log(newcountrylist)
            //console.log("countrylistArr " + lc);
            //console.log("button " + filtereditem);
            return (lc === filtereditem);
        })
        //console.log(newcountrylist);
     this.setState({
       filtered: country.toLowerCase() === this.props.init ? this.state.profilelist : newcountrylist
     })
     return this.state.profilelist
   }

    render() {
        return (
            <div>
            <div className="menubar">
              <button onClick={() => this.filterByCountry("All")}>All</button>
              <button onClick={() => this.filterByCountry("England")}>England</button>
              <button onClick={() => this.filterByCountry("USA")}>USA</button>
              <button onClick={() => this.filterByCountry("Malaysia")}>Malaysia</button>
              <button onClick={() => this.filterByCountry("Germany")}>Germany</button>
            </div>
            </div>
          )
    }
}

export default ButtonCountry;