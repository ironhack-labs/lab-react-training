import profiles from '../data/berlin.json';
import React, { Component } from 'react'

class Facebook extends Component {
    state = {
        filter:""
    }
    renderTable = () => {
        return (
            <div className="facebook">
                <div class="controllers">
                    <button onClick={() => {this.setState({filter:""})}} style={{backgroundColor: this.state.filter==="" ? 'cyan' : 'white'}}>All</button>
                    <button onClick={() => {this.setState({filter:"England"})}} style={{backgroundColor: this.state.filter==="England" ? 'cyan' : 'white'}}>England</button>
                    <button onClick={() => {this.setState({filter:"Malaysia"})}} style={{backgroundColor: this.state.filter==="Malaysia" ? 'cyan' : 'white'}}>Malaysia</button>
                    <button onClick={() => {this.setState({filter:"Germany"})}} style={{backgroundColor: this.state.filter==="Germany" ? 'cyan' : 'white'}}>Germany</button>
                </div>
                {this.filteredArray(this.state.filter).map((profile, index_cells) => (
                    <div className="profile">
                        <div className="picture"><img src={profile.img} alt="profile"/></div>
                        <div className="data">
                            <div><span style={{fontWeight:700}}>First Name: </span><span>{profile.firstName}</span></div>
                            <div><span style={{fontWeight:700}}>Last Name: </span><span>{profile.lastName}</span></div>
                            <div><span style={{fontWeight:700}}>Country: </span><span>{profile.country}</span></div>
                            <div><span style={{fontWeight:700}}>Type: </span><span>{profile.isStudent ? 'Student' : 'Teacher'}</span></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    filteredArray(newFilter) {
        var filteredArray = profiles.filter((item)=>{
            return item.country.includes(newFilter);
        });
        console.log(filteredArray);
        return filteredArray;
    }

    render() {
        return(
            this.renderTable()
        )
    }
}
export default Facebook;