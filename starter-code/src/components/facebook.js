import React, { Component } from 'react';
import profiles from '../data/berlin.json';

export class FaceBook extends Component {
  constructor(props){
    super(props);
    this.state = {
        profilelist: profiles,
        filtered: profiles
    }
}

showProfile = () =>{
  return this.state.filtered.map((eachProfile,i)=>{
      return(
        <div className="profilecard" key={i}>
          <div className="profileimage"><img src={eachProfile.img} alt="Actor"/></div>
          <div className="profilecontent">
            <ul>
              <li><strong>First Name:</strong> {eachProfile.firstName}</li>
              <li><strong>Last Name:</strong> {eachProfile.lastName}</li>
              <li><strong>Country:</strong> {eachProfile.country}</li>
              <li><strong>Type:</strong> {eachProfile.isStudent ? "Student" : "Teacher"}</li>
            </ul>
          </div>
      </div>
      )
  })
}
filterByCountry = (country) => {
  let countrylist = [...this.state.profilelist];
  let filtereditem = country.toLowerCase();
  console.log(countrylist);
  let newcountrylist = countrylist.filter(item => {
      const lc = item.country.toLowerCase();
      // const filter = country;
      console.log("countrylistArr " + lc);
      console.log("button " + filtereditem);
      return (lc === filtereditem);
  })
  console.log(newcountrylist);
    this.setState({
      filtered: country.toLowerCase() === "all" ? this.state.profilelist : newcountrylist
    })
  }

  render() {
    return (
      <div>
      <div className="menubar">
        <button onClick={() => this.filterByCountry("All")}>All</button>
        <button onClick={() => this.filterByCountry("England")}>England</button>
        <button onClick={() => this.filterByCountry("USA")}>USA</button>
      </div>
      <div className="profileTable">
      {this.showProfile()}
      </div>
        
      </div>
    )
  }
}

export default FaceBook
