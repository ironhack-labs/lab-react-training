import React, { Component } from 'react'

class CkPic extends Component {
    state = {
        click: 'false'
        
    }

    handleChange = (e) => { 
        this.setState({click: "true"})
    }


    render() {
        return (
            <div className="ClickablePicture">
                {
                    this.state.click === "true" ?
                    <img alt="clickeablePicture" src="./img/persons/maxence-glasses.png" height="100px" onClick={this.handleChange}/>  
                    :
                    <img alt="clickeablePicture" src="./img/persons/maxence.png" height="100px" onClick={this.handleChange}/>  
                }
            </div>
        )
    }
}

export default CkPic;