import React, {Component} from "react";

class ClickablePicture extends Component {
    state = {
        img:this.props.img,
        checked:false
    }
    
    handleClick = () => {
        const {img,imgClicked} = this.props
        if(!this.state.checked){
            this.setState( {img:imgClicked,checked:true})
        } else {
            this.setState({img:img,checked:false})
        }
    }
    
    render(){
        return <img alt="Max" style={{width:"300px",height:"300px"}} onClick={this.handleClick} src={this.state.img}/>
    }
}

export default ClickablePicture;