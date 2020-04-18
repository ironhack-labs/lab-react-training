import React, {Component} from 'react';

class BoxColor extends Component {
     RGBToHex(r,g,b) {
        r = Number(r).toString(16);
        g = Number(g).toString(16);
        b = Number(b).toString(16);
        if (r.length === 1)
          r = "0" + r;
        if (g.length === 1)
          g = "0" + g;
        if (b.length === 1)
          b = "0" + b;
        return "#" + r + g + b;
      }

    render(){
        return(
            <div style = {{
                background : `rgb(${this.props.r},${this.props.g},${this.props.b} )`,
                height : 50,
                margin: 15,
                textAlign: "center",
            }}>
                rgb ({this.props.r}, {this.props.g}, {this.props.b}) <br />
                {this.RGBToHex(this.props.r,this.props.g,this.props.b)}
            </div>
        )
    }
}



export default BoxColor;