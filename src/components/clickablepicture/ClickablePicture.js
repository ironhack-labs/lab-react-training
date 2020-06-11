import React, { Component } from 'react';

class ClickablePicture extends Component {

    state = {
        img:this.props.img
    }

    clickPic(){
        if(this.state.img===this.props.img){
            this.setState({
                img : this.props.imgClicked
            })
        }
        else{
            this.setState({
                img : this.props.img
            })
        }
        
    }


    render(){
        return (
            <img 
                width="150px" 
                src={this.state.img} 
                alt="gaddam" 
                onClick={(e) => this.clickPic(e)}
                style={{cursor:'pointer', margin:'30px'}}
            />
        )
    }
}
export default ClickablePicture;