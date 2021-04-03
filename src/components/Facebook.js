import React, { Component } from 'react'
import profiles from '../data/berlin.json';


export default class Facebook extends Component {
    
    state = {
        profiles: [...profiles],
        clicked: ''
    }

    onClick = (e) => {
        e.target.classList.add("FacebookBtnClicked");
        this.setState({clicked: e.target.id})
    }

    render() {

        return (
            <div className="FacebookWrapper">
                <button className={ this.state.clicked === "England" ? "FacebookBtnClicked" : "FacebookBtn" } id="England" onClick={this.onClick}>England</button>
                <button className={ this.state.clicked === "USA" ? "FacebookBtnClicked" : "FacebookBtn" } id="USA" onClick={this.onClick}>USA</button>
                <button className={ this.state.clicked === "Malaysia" ? "FacebookBtnClicked" : "FacebookBtn" } id="Malaysia" onClick={this.onClick}>Malaysia</button>
                <button className={ this.state.clicked === "Germany" ? "FacebookBtnClicked" : "FacebookBtn" } id="Germany" onClick={this.onClick}>Germany</button>
                <button className={ this.state.clicked === "Sweden" ? "FacebookBtnClicked" : "FacebookBtn" } id="Sweden" onClick={this.onClick}>Sweden</button>
                <button className={ this.state.clicked === "Nigeria" ? "FacebookBtnClicked" : "FacebookBtn" } id="Nigeria" onClick={this.onClick}>Nigeria</button>
                <button className={ this.state.clicked === "Italy" ? "FacebookBtnClicked" : "FacebookBtn" } id="Italy" onClick={this.onClick}>Italy</button>
                <button className={ this.state.clicked === "Scotland" ? "FacebookBtnClicked" : "FacebookBtn" } id="Scotland" onClick={this.onClick}>Scotland</button>
                <button className={ this.state.clicked === "Kazakhstan" ? "FacebookBtnClicked" : "FacebookBtn" } id="Kazakhstan" onClick={this.onClick}>Kazakhstan</button>
                <button className={ this.state.clicked === "Russia" ? "FacebookBtnClicked" : "FacebookBtn" } id="Russia" onClick={this.onClick}>Russia</button>
                <button className={ this.state.clicked === "Catalonia" ? "FacebookBtnClicked" : "FacebookBtn" } id="Catalonia" onClick={this.onClick}>Catalonia</button>
                <button className={ this.state.clicked === "France" ? "FacebookBtnClicked" : "FacebookBtn" } id="France" onClick={this.onClick}>France</button>
                <button className={ this.state.clicked === "Israel" ? "FacebookBtnClicked" : "FacebookBtn" } id="Israel" onClick={this.onClick}>Israel</button>
                <button className={ this.state.clicked === "Brazil" ? "FacebookBtnClicked" : "FacebookBtn" } id="Brazil" onClick={this.onClick}>Brazil</button>
                <button className={ this.state.clicked === "Taiwan" ? "FacebookBtnClicked" : "FacebookBtn" } id="Taiwan" onClick={this.onClick}>Taiwan</button>
                <button className={ this.state.clicked === "Turkey" ? "FacebookBtnClicked" : "FacebookBtn" } id="Turkey" onClick={this.onClick}>Turkey</button>
                <button className={ this.state.clicked === "Norway" ? "FacebookBtnClicked" : "FacebookBtn" } id="Norway" onClick={this.onClick}>Norway</button>
                <div>
                {this.state.profiles.map((value, index) => {
                    return (
                        <div className={ this.state.clicked === value.country ? "Facebook FacebookBg card mb-3" : "Facebook card mb-3" } key={index}>
                            <div className="row g-0">
                                <div className="col-md-4 text-center mt-auto mb-auto">
                                    <img src={value.img} alt={value.firstName}/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text">First name: <strong>{value.firstName}</strong></p>
                                        <p className="card-text">Last name: <strong>{value.lastName}</strong></p>
                                        <p className="card-text">Country: <strong>{value.country}</strong></p>
                                        <p className="card-text">Type: <strong>{(value.isStudent ? "Student" : "Teacher")}</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}