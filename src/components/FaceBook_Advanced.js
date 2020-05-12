import React, { Component } from "react";
import profiles from "../data/berlin.json";

export default class FaceBookAdvanced extends Component {

    state = {
        selected: []
    }

    constructor() {
        super();
        this.filterClickHandler = this.filterClickHandler.bind(this);
    }

    updateSelected = (clicked) => {
        // Busca clicked en selected
        let selected = this.state.selected;
        let found = false;
        // Si lo encuentra, lo elimina de selected
        for (let i = 0; i < selected.length; i++) {
                if (selected[i] === clicked) {
                    found = true;
                    selected.splice(i,1);
                    // https://love2dev.com/blog/javascript-remove-from-array/
                    i--;
                }
            }
        // Si no lo encuentra, lo agrega
        if (!found) selected.push(clicked);
        this.setState({ selected })
        // console.log("selected: ", this.state.selected );
    }

    filterClickHandler = (event) => {
        /* Para pasar el parámetro se podría utilizar onClick={() => this.filterClickHandler({country})} y se tendría que adaptar lo necesario */
        // https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd/
        const country = event.target.innerHTML;
        this.updateSelected(country);
        
        // Otra manera sería mediante la propiedad .dataset.<nombre del tag>
        //const dataCountry = event.target.dataset.country;
        //console.log(dataCountry);
    }

    render () {
        return (
            <div>
                <div>
                {/* https://codeburst.io/javascript-array-distinct-5edc93501dc4 */}
                    {[...new Set(profiles.map(profile => profile.country))].map(country => (
                        <div onClick={this.filterClickHandler} key={country} style={{margin: "5px", padding:"5px 10px", float: "left",
                        border:"2px solid #eeeeee", fontSize: "x-large",
                        background: this.state.selected.find(item => item === country) ? '#a3d2e2': 'white'}} data-country={country}>
                            {country}
                        </div>
                    ))}
                    <div style={{clear: "both"}} />
                </div>
                {profiles.map(card => (
                    <div key={card.firstName+card.lastName}
                    style={{border: "2px solid black", margin:"20px", padding:"6px",
                        background: this.state.selected.find(item => item === card.country) ? '#a3d2e2': 'white'}} >
                        <div style={{float: "left"}}>
                            <img src={card.img} alt={card.firstName} style={{width:"200px"}} />
                        </div>
                        <div style={{float: "left", fontSize: "xx-large", margin: "0px 10px"}}>
                            <div><span style={{fontWeight: "bold"}}>First name: </span>{card.firstName}</div>
                            <div><span style={{fontWeight: "bold"}}>Last name: </span>{card.lastName}</div>
                            <div><span style={{fontWeight: "bold"}}>Country: </span>{card.country}</div>
                            <div><span style={{fontWeight: "bold"}}>Type: </span>{card.isStudent ? "Student":"Teacher"}</div>
                        </div>
                        <div style={{clear: "both"}} />
                    </div>
                ))}
            </div>
        )
    }
}