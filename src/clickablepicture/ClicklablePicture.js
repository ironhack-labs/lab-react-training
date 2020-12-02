import React, { Component } from 'react'

export default class ClicklablePicture extends Component {
    
    constructor(props){
        super(props);
        this.state={ 
            imgSrc:this.props.img,
            imgSrcClicked:this.props.imgClicked
            };
    }
    
    clickedPictureHandler=()=>{
        this.setState((state,props)=>({
            imgSrc:this.state.imgSrcClicked,
            imgSrcClicked:this.state.imgSrc
        }));

    }

    render() {
        return (
            <div>
                <div style={{display:'flex'}}className="img-container">
                        <img style={{width:'100px',height:'100px'}}onClick={this.clickedPictureHandler} src={this.state.imgSrc} alt=""/>
                </div>
            </div>
        )
    }
}
