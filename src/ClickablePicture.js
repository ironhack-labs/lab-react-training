import React from 'react';

export default class ClickablePicture extends React.Component {
    constructor(state, props) {
        super(props);
        this.state = {
          glasses: false,
        };
      }
      clickHandler = () => {
        console.log('click');
        this.setState((state) => ({
          glasses: !this.state.glasses
        }));
      };
  render() {
    return (
      <div className="ClickablePicture">
        <img onClick={this.clickHandler}  src={this.state.glasses ? `${this.props.img}`:`${this.props.imgClicked}`} alt="piccy"/>
      </div>
    );
  }
}
