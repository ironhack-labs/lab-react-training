import React from 'react';
import "./ClickablePicture.css";

export default class ClickablePicture extends React.Component {
    state = {
        clicked: false,
      };

    onClick = () => {
        this.setState({ clicked: !this.state.clicked })
      };

    render() {
        return(
        <button className='ClickablePicture' onClick={this.onClick}>
            {this.state.clicked ? <img className='withGlasses' src={this.props.imgClicked} alt='A guy with glasses'/>
            : <img className ='withoutGlasses' src={this.props.img} alt='A guy without glasses'/>}
        </button>
        )
    }
}