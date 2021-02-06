import React from 'react';
import RatingClass from '../RatingClass/RatingClass';

class DriverCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
    this.img = this.props.img;
    this.rating = this.props.rating;
    this.model = this.props.car.model;
    this.licensePlate = this.props.car.licensePlate;
  }
  render() {
    return (
      <article className="driver">
        <div className="container">
          <img src={this.img} alt={this.name} />
          <div>
            <h3>{this.name}</h3>
            <RatingClass>{this.rating}</RatingClass>
            <p>
              {this.model} - {this.licensePlate}
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default DriverCardClass;
