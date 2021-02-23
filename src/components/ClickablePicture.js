import React, { Component } from 'react'

export default class ClickablePicture extends Component {
   state = {
       picture: this.props.img
   }

   changeStatus = () => {
        if(this.state.picture === this.props.img) {
            this.setState((state, props) => ({
                picture: props.imgClicked
                }))
        } else {
            this.setState((state, props) => ({
                picture: props.img
                }))
        }        
   }

    render() {
        
        return (
            <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", padding:"10px", margin:"10px", border:"solid 2px black"}}>
                <img src={this.state.picture} alt="clickable" onClick={this.changeStatus} style={{width:"250px"}}/>
            </div>
        )
    }
}
