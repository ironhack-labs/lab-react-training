import React from 'react';

class BoxColor extends React.Component {
  convertToHex = (r, g, b) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  render() {
    const styleObj = {
      backgroundColor: this.convertToHex(
        this.props.r,
        this.props.g,
        this.props.b
      ),
      display: 'flex',
      flexDirection: 'column',
    };

    return (
      <>
        <div className="singleCard" style={styleObj}>
          <p>
            {'rgba(' +
              this.props.r +
              ',' +
              this.props.g +
              ',' +
              this.props.b +
              ')'}
          </p>
          <p>{this.convertToHex(this.props.r, this.props.g, this.props.b)}</p>
        </div>
      </>
    );
  }
}

export { BoxColor };
