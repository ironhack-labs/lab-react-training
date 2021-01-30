import React from 'react'
import './Facebook.css'
import profiles from '../data/berlin.json'

class Facebook extends React.Component {
    constructor(props){
        super(props);
        this.filterCountries = this.filterCountries.bind(this)
        this.state = {
            activeCountry: ''
        }
    }

    filterCountries(e) {
        this.setState({
            activeCountry: e.target.innerHTML
        })
        console.log(this.state.activeCountry)
    }

    render() {

        let countries = ['All',...new Set(profiles.map(profile => profile.country))]

        let Buttons = () => {
            return (
                countries.map(country => {
                    let buttonState = (country === this.state.activeCountry) ? 'button-active': 'button-not-active'
                    return <button className={buttonState} onClick={this.filterCountries}>{country}</button>
                })
            );
        }

        let Profile = (props) => {
            
            let profileState = (props.data.country === this.state.activeCountry) ? 'profile-active': 'profile-not-active'


            if (this.state.activeCountry === 'All') {
                profileState = 'profile-active'
            }

            return(
                <div className={`profile ${profileState}`}>
                    <div>
                        <img src={props.data.img} alt={`${props.data.firstName}${props.data.lastName}`} className="profile-img"/>
                    </div>
                    <div className='profie-info'>
                        <p><b>First name: </b>{props.data.firstName}</p>
                        <p><b>Last name: </b>{props.data.lastName}</p>
                        <p><b>Country: </b>{props.data.country}</p>
                        <p><b>Type: </b>{(props.data.isStudent) ? 'Student':'Teacher'}</p>
                    </div>
                </div>
            );
        }

        return(
            <React.Fragment>
                <Buttons />
              {
                  profiles.map(profile => {
                    return <Profile data={profile}/>;
                    })
            }   
            </React.Fragment>
            
        );
    }
}

export default Facebook;