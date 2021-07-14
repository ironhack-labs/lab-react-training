import React, { Component } from 'react'
import "../css/idCard.css"
export default class ClickablePicture extends Component {
    state = {
        foto1: "/img/persons/maxence.png",
        foto2: "/img/persons/maxence-glasses.png",
        active: false
    }

    clickHandler = () => {
        this.setState((state) => ({
                active: !state.active
            }));
    }




    render() {
        return (
            <div>
            <img onClick={this.clickHandler} src={this.state.active ? this.state.foto1 : this.state.foto2} alt = "clickedOrNot"/> 
            </div>
        )}}