import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    constructor(props){
        super(props)
        this.state = {
            clicks: false
        }
    }
        thugimg =()=>{
            this.setState({clicks : !this.state.clicks})
        }   

    render() {
       

        return (
            <div>
              <img onClick={this.thugimg} src={this.state.clicks ? this.props.img : this.props.imgClicked} alt="image" />
          </div>
        )
    }
}
