import React, { Component } from 'react'
import profiles from './data/berlin.json';


export class FaceBook extends Component {
    state = {
        profilesArr:profiles
    }
    showCountry = (country)=>{
       let newProfilesArr = country === 'all'? profiles : profiles.filter(state=>state.country === country)
       this.setState({profilesArr:newProfilesArr})
    }
    render() {
        console.log(profiles)
        let countries = [...new Set(profiles.map(profile=>profile.country))]
        console.log(countries)
        return (
            <div>
                <div>
                    <button onClick={()=>this.showCountry('all')}>All</button>
                    {countries.map(country=><button onClick={()=>this.showCountry(country)}>{country}</button>)}
                </div>
                {this.state.profilesArr.map(profiles=>
                <div className='flex borderWrapper'>
                    <img className='logo' src={profiles.img} alt={profiles.firstName}/>
                    <div>
                        <p><span className='bold'>First name: </span>{profiles.firstName}</p>
                        <p><span className='bold'>Last name: </span>{profiles.lastName}</p>
                        <p><span className='bold'>Country: </span>{profiles.country}</p>
                        <p><span className='bold'>Type: </span>{profiles.isStudent? 'Student':'Teacher'}</p>
                    </div>
                </div>
            )}
            </div>
        )
    }
}

export default FaceBook
