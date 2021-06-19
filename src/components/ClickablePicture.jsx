import React, { Component } from 'react'

class ClickablePicture extends Component {
    constructor(props){
        super(props);
        this.state = {
            glasses: false,
            displayedImg: this.props.img
        };
        this.setGlasses = this.setGlasses.bind(this);
    }

    render() {
        return (
            <div className="clickablePicture">
                <img onClick={this.setGlasses} src={this.state.displayedImg} alt="glasses on click"/>
            </div>
        );
    }

    setGlasses() {
        if(this.state.glasses) {
            this.setState({glasses:false});
            this.setState({displayedImg:this.props.img});
        }
        else {
            this.setState({glasses:true});
            this.setState({displayedImg:this.props.imgClicked});
        }
    }
}

export default ClickablePicture;