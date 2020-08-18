import React from 'react';

class ClickablePicture extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            isClicked: false,
            source: this.props.img
        }
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.isClicked,
            source: this.state.source === this.props.imgClicked? this.props.img : this.props.imgClicked

        })
    }

    render(){
        return (
            <div>
            <img onClick={this.handleClick} src={this.state.source} alt="click on it"/>
            </div>
        )
    }
    
}

export default ClickablePicture