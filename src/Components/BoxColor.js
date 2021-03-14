import React, {Component} from 'react';

class BoxColor extends Component {
    render() {

        //formule to transf rgb to hex console.log(this.props)

        return (
        <div style={{backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`}}>
        rgb({this.props.r},{this.props.g}, {this.props.b})


        </div>
    )
    }
}
export default BoxColor