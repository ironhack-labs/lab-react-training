import React, { Component } from 'react'

class CLickablePicture extends Component{
    state ={
        clicked: false,
    }
    showImg = () =>{
        this.setState({
            clicked: true
        })
    }
    hideImg = () =>{
        this.setState({
            clicked: false
        })
    }
    render(){
        const { img, imgClicked } = this.props;
        return(
            <div className='parent'>
                <img className='image1' onClick={this.showImg}src={img} alt=''></img>
                {this.state.clicked && 
                <img className='image2' onClick={this.hideImg} src={imgClicked} alt=''></img>
                }
            </div>
        )
    }
}


export default CLickablePicture;