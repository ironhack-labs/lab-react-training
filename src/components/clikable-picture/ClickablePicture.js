import { Component } from "react";

class ClickablePicture extends Component {

    state = {
        visibility: false
    }

    handleTogglePicture = () => {
        this.setState({
            visibility: this.setState.visibility === true?this.setState.visibility = false:this.setState.visibility = true
        })
    }


    render() {
        return (
         <div>
             {console.log(this.setState.visibility)}
            {!this.setState.visibility && <img src={this.props.img} onClick={this.handleTogglePicture} alt='random guy'  /> }               
            {this.setState.visibility && <img src={this.props.imgClicked} alt='random guy' />}
            
        </div>
        

            
        )
    }
}

export default ClickablePicture