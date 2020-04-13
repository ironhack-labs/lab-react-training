import React, {Component} from 'react';
import './style.css';

class ClickablePicture extends Component {
  state = {
    clicked: false,
  };

  _clickImage = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  };

  render() {
    const {imgClicked, img} = this.props;
    return (
      <div className={'clickablePicture'}>
        <img onClick={this._clickImage} src={this.state.clicked ? imgClicked : img} alt=""/>
      </div>
    );
  }
}

export default ClickablePicture;