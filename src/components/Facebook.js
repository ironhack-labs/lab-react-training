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
            color: green
        }
        this.clicked = this.clicked.bind(this);
    }

    getProfile() {
        return this.state.data.map(ele => (
            <div style={{ background: this.state.color }} className="profileCard" key={ele.firstName}>
                <div>
                    <img className="fbPhoto" src={ele.img} />
                </div>
                <div>
                    <p><strong>First name:</strong> {ele.firstName}</p>
                    <p><strong>Last name:</strong> {ele.lastName}</p>
                    <p><strong>Contry:</strong> {ele.country}</p>
                    {ele.isStudent && <p><strong>Type:</strong> Student</p>}
                    {!ele.isStudent && <p><strong>Type:</strong> Teacher</p>}
                </div>

            </div>
        ))
    }

    displayButton() {
        let copy = [...this.state.data]
        let allCountries = [];
        for (let n = 0; n < copy.length; n++) {
            if (allCountries.indexOf(copy[n].country) === -1) {
                allCountries.push(copy[n].country)
            }
        }
        return allCountries.map(ele => (
            <FacebookBtn
                text={ele}
                colored={this.clicked}
                country={ele}
            />
        ))
    }

    clicked() {
        console.log('clicked')
        console.log(this.props.country)
        const newColor = this.state.color === green ? yellow : green;
        this.setState({ color: newColor })

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

