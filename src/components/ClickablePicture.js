import React, { Component } from "react";
import "../index.css";

class ClickablePicture extends Component {
    img = {
        withoutGlasses: "img/persons/maxence.png",
        withGlasses: "img/persons/maxence-glasses.png"
    }

    state = {
        img: "img/persons/maxence.png"
    }

    changeImage = () => {
        let { withoutGlasses, withGlasses } = this.img;
        let { img } = this.state;
        img === withoutGlasses ? img = withGlasses : img = withoutGlasses;
        this.setState({ img })
    }

    render() {
        let { img } = this.state;
        let { changeImage } = this;

        return (
            <img className="clickable-picture" src={img} onClick={changeImage} alt=""/>
        )
    }
}

export default ClickablePicture;