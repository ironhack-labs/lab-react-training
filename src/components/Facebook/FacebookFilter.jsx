import React, { Component } from 'react';

export class FacebookFilter extends Component {
  state = { selected: 'all' };
  onClickHandler = (event) => {
    const selectedCountry = event.target.value;
    this.setState({ selected: selectedCountry });
    this.props.onFilterSelect(selectedCountry);
  };

  render() {
    return (
      <div className="facebookFilter">
        <button
          value="all"
          onClick={this.onClickHandler}
          className={`filterButton ${
            'all' === this.state.selected ? ' selectedOption' : ''
          }`}
        >
          All
        </button>
        <button
          value="England"
          onClick={this.onClickHandler}
          className={`filterButton ${
            'england' === this.state.selected ? ' selectedOption' : ''
          }`}
        >
          England
        </button>
        <button
          value="USA"
          onClick={this.onClickHandler}
          className={`filterButton ${
            'usa' === this.state.selected ? ' selectedOption' : ''
          }`}
        >
          USA
        </button>
        <button
          value="Malaysia"
          onClick={this.onClickHandler}
          className={`filterButton ${
            'malaysia' === this.state.selected ? ' selectedOption' : ''
          }`}
        >
          Malaysia
        </button>
        <button
          value="Germany"
          onClick={this.onClickHandler}
          className={`filterButton ${
            'germany' === this.state.selected ? ' selectedOption' : ''
          }`}
        >
          Germany
        </button>
      </div>
    );
  }
}

export default FacebookFilter;
