import React, { Component } from 'react'

class ClickablePicture extends Component {


    constructor(props) {
        super(props);
        console.log(props);
        
        this.state = {
          clicked: true
        }

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
                src= {this.state.clicked ? this.props.img : this.props.imgClicked} 
                onClick={() => {
                  this.handleClick();
                }}/>
            </button>
        )

    }



}

export default ClickablePicture
