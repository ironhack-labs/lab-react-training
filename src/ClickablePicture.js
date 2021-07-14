import React, { Component } from 'react'

export default class ClickablePicture extends Component {

    state = {
        clicked: false
      }

    clickHandler = () => {
        this.setState(state => ({
          clicked: !state.clicked
        }))
      }

      render() {
        console.log('what is this',this.state, this.props);
        return (
          <>
              <h1>{this.state.clicked ? 'click for glases ' : 'click for noGlasses'}</h1>
              <button onClick={this.clickHandler}>
                <img src = {this.state.clicked ? this.props.img : this.props.imgClicked} alt="somepicture"/>
              </button>
              {/* <button onClick={() => console.log('click me as well')}>Click me as well :point_down:</button> */}
          </>
        );
    }
}
