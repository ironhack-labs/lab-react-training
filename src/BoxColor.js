import React, {Component} from 'react';

class BoxColor extends Component {
    constructor(props) {
      super(props);
    }

    componentToHex(c) {
      var hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }
  
    getHexColor() {
      return "#" + this.componentToHex(this.props.r) + this.componentToHex(this.props.g) + this.componentToHex(this.props.b);
    }

    getRgbString() {
      return "rgb(" + this.props.r + ", " + this.props.g + ", " + this.props.b +")";
    }

    render() {

      return  <div>
                <div style={{background: this.getRgbString()}} className="box"> 
                  <div>{this.getRgbString()}</div>
                  <div>{this.getHexColor()}</div>
                </div>
             </div>
    
        /*
        let backgroundColorVar = "rgb("+{this.props.r} {this.props.g} {this.props.b};
        <div style={backgroundColor: backgroundColorVar}>
            "rgb("+ {this.props.r}, {this.props.g}, {this.props.b})
        </div>
       */
    }
}

export default BoxColor;