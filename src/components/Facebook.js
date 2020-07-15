import React, { Component } from 'react';
import profiles from '../data/berlin.json';
import FacebookBtn from './FacebookBtn';

const green = '#39D1B4';
const yellow = '#FFD712';

export default class Facebook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [...profiles],
            color: '',
            country: '',
        }
        this.selectCountry = this.selectCountry.bind(this);
    }

    getProfile() {
        return this.state.data.map((ele, i) => {
            const countrySelected = this.state.country === ele.country ? green : yellow
            return (
                <div style={{ background: countrySelected }} className="profileCard" key={i}>
                    <div>
                        <img className="fbPhoto" src={ele.img} alt={ele.img} key={i} />
                    </div>
                    <div>
                        <p><strong>First name:</strong> {ele.firstName}</p>
                        <p><strong>Last name:</strong> {ele.lastName}</p>
                        <p><strong>Contry:</strong> {ele.country}</p>
                        {ele.isStudent ? <p><strong>Type:</strong> Student</p> : <p><strong>Type:</strong> Teacher</p>}
                    </div>

                </div>
            )
        })
    }

    selectCountry(country) {
        this.setState({ country: country })
    }

    displayButton() {
        let copy = [...this.state.data]
        let allCountries = [];
        for (let n = 0; n < copy.length; n++) {
            if (allCountries.indexOf(copy[n].country) === -1) {
                allCountries.push(copy[n].country)
            }
        }

        return allCountries.map((ele, i) => (
            <FacebookBtn
                key={i}
                text={ele}
                selectCountry={this.selectCountry}
                country={ele}
            />
        ))
    }



    render() {
        return (
            <div>
                <div className="divBtn">
                    {this.displayButton()}
                </div>
                <div>
                    {this.getProfile()}
                </div>
            </div>
        )
    }
}

