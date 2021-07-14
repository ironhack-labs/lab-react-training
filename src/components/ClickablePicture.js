import React from 'react'

class ClickablePicture extends React.Component {
    state = {
        clicked: false
    }
    clickHandler = () => {
        this.setState(state => ({
            clicked: !state.clicked
        }))
    }
    render() {    
        return (
          <>
              <h1>{this.state.clicked ? 'better with sunglasses ?' : 'better without sunglasses?'}</h1>
              <button onClick={this.clickHandler}>
                <img src = {this.state.clicked ? this.props.img : this.props.imgClicked} alt="somepicture"/> 
              </button>
          </>
        );
    }

}

export default ClickablePicture;