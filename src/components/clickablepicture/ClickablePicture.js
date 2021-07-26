import { Component } from "react";

class ClickablePicture extends Component {
    state = {
        isClickedImg: false
    }

    handleClick() {
        this.setState({
            isClickedImg: true
        });
    }

    render() {
        return(

            <div>
                <img src={this.state.isClickedImg ? this.props.imgClicked : this.props.img} onClick={() => this.handleClick()} />  
            </div>
        )
    }
}

export default ClickablePicture;

