import React from 'react';

export default class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    this.setState((state) => ({
      clicked: !state.clicked,
    }));
  };

  render = () => {
    const { clicked } = this.state;
    return (
      <div className="Col">
        <img
          className="clickable-picture"
          src={clicked ? this.props.imgClicked : this.props.img}
          alt="pic"
          onClick={this.handleClick}
        />
      </div>
    );
  };
}
