import React, { Component } from "react"
import profiles from '../data/berlin.json';

class FaceBook extends Component {
    state = {
        selectedCountry: "none",
        countries: []
    }

    getCountries = () => {
        const countries = []
        profiles.forEach(p => {
            if (!countries.includes(p.country)) {
                countries.push(p.country)
            }
        })
        this.setState({
            countries: countries
        })
    }

    selectCountry = c => {
        this.setState({
            selectedCountry: c
        })
    }

    componentDidMount() {
        this.getCountries()
    }

    render() {
        return (
            <div>
                {this.state.countries?.map((c, i) => (
                    <button style={{backgroundColor: this.state.selectedCountry === c ? "lightblue" : "white"}} key={i} onClick={() => this.selectCountry(c)}>{c}</button>
                ))}
                {profiles.map((p, i) => (
                    <div key={i} style={{ border: "1px solid black", display: "flex", minWidth: "500px", backgroundColor: this.state.selectedCountry === p.country ? "lightblue" : "white" }}>
                        <img src={p.img} style={{ minWidth: "200px" }} />
                        <div style={{ margin: "auto" }} >
                            <p><strong>First name: </strong>{p.firstName}</p>
                            <p><strong>Last name: </strong>{p.lastName}</p>
                            <p><strong>Country: </strong>{p.country}</p>
                            <p><strong>Type: </strong>{p.isStudent ? "Student" : "Teacher"}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default FaceBook;