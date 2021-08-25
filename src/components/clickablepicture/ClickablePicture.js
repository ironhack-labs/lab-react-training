import React, { Component } from "react"
import maxence from "./maxence.png"
import maxenceGlasses from "./maxence-glasses.png"

class ClickablePicture extends Component {

    state= {
        showGlasses: false
    }

    handleGlasses() {
        this.setState({
            showGlasses: !this.state.showGlasses
        })
    }

    render() {
        const showGlasses = this.state.showGlasses;
        return(
            <div className="d-flex justify-content-center" >
            {
                showGlasses ? 
                <img src={maxenceGlasses} onClick={() => this.handleGlasses()} alt="maxence" name="maxence"/> :
                <img src={maxence} alt="maxence" onClick={() => this.handleGlasses()} name="maxence"/>
            }
            </div>
        )
            
    }
}

export default ClickablePicture