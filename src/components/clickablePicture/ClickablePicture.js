import { Component } from "react";

class ClickablePicture extends Component {
    

    state = {
        boyGlasses: false,
        img: '/img/persons/maxence-glasses.png'
    }

    handlePicture = () => {
        this.setState((state) => ({
            boyGlasses: !state.boyGlasses
        }))
    }

    render() {
        return(
            <div>
                <img className="ms-5" src={this.state.boyGlasses ? '/img/persons/maxence-glasses.png' : '/img/persons/maxence.png'} alt="descriptt" onClick={this.handlePicture}></img>
            </div>
        )
    }
}

export default ClickablePicture