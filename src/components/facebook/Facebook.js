import profiles from '../../data/berlin.json';
import { Component } from 'react';

class Facebook extends Component {
    state = {
        selectedCountry: null
    }

    highlightCountry = (event) => {
        this.setState({
            selectedCountry: event.target.value
        })
    }

    render() {
        const countries = []
        profiles.map(p => {
            if (!countries.includes(p.country)) {
                countries.push(p.country);
            }
        })

        return (
            <div>
                <div>
                    <div className="mb-4">
                        <button onClick={this.highlightCountry} value="All" className="btn-primary btn">All</button>
                        {countries.map(c => {
                            return <button onClick={this.highlightCountry} value={c} className="btn-primary btn ms-2">{c}</button>
                        })}
                    </div>

                </div>
                <div className="d-flex flex-column align-items-center">
                    {profiles.map(profile => {
                        return <div className={`${(this.state.selectedCountry === profile.country || this.state.selectedCountry === 'All')  && 'bg-primary'} w-50 row border border-dark p-2 mb-2 align-items-center`}>
                            <div className="col-3">
                                <img className="w-100" src={profile.img} alt={profile.firstName} />
                            </div>
                            <div className="col">
                                <p><b>First name:</b> {profile.firstName}</p>
                                <p><b>Last name:</b> {profile.lastName}</p>
                                <p><b>Country:</b> {profile.country}</p>
                                <p><b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default Facebook;