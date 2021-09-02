import React from 'react';
import "./ClickablePicture.css";

export default class ClickablePicture extends React.Component {
    state = {
        clicked: false
    }

    toggleImgChange = () => {
        if (this.state.clicked === true){
            this.setState({
                clicked: false
            })
        }else{
            this.setState({
                clicked: true
            })
        }
    }


    render(){

        let img = () => {
            
            if (this.state.clicked === true) {
                return this.props.imgClicked;
            } else {
            return this.props.img;
            }
        };

        return(
            <img src={img()} alt=""  className="ClickablePicture" onClick={this.toggleImgChange}/>
        );
    }
}
