import React, { Component } from 'react'

class ClickablePicture extends Component {


        state = {
          clicked: false
        }

    
    handleClick = ()=> {
        this.setState({
           clicked: !this.state.clicked
        })

    }

    render(){

        return (

            <button style={{height:150, width:150, backgroundColor:'transparent', border:'none'}}> 
                <img style={{height:150, width:150}}
                src= {this.state.clicked ? this.props.imgClicked : this.props.img} 
                onClick={() => {
                  this.handleClick();
                }}/>
            </button>
        )

    }



}

export default ClickablePicture
