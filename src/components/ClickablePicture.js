import React from 'react';

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.img = this.props.img;
    this.imgClicked = this.props.imgClicked;
  }

  clickHandler = () => {
    this.setState(() => ({
      clicked: !this.state.clicked,
    }));
  };

  render() {
    return (
      <div className="clickablePicture">
        <img
            onClick={this.clickHandler}
            src={this.state.clicked ? this.imgClicked : this.img}
            alt="clickable"
        />
      </div>
    );
  }
}

export default ClickablePicture;
