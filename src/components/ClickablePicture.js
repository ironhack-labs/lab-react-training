
import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    constructor(props){
        super(props)
        this.state = {
            changeImg: true
        }
    }
        myimg =()=>{
            this.setState({changeImg : !this.state.changeImg})
        }   

    render() {


        return (
            <div>
              <img alt="changeImage" onClick={this.myimg} src={this.state.changeImg ? this.props.img : this.props.change}  />
          </div>
        )
    }
}