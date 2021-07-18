import { Component } from "react";
import '../App.css';



class BoxColor extends Component{
    render(){
        let r = this.props.r;
        let g = this.props.g;
        let b = this.props.b;
        let colorText = '';
        if (r + g + b > 300) {
            colorText = 'black'
        } else {
            colorText = 'white'
        }
        return (
            <div className="box-color" style= {{
                backgroundColor: `rgb(${r},${g},${b})`,
                color: colorText,
              }}>
                rgb({r},{g},{b})
              </div>
        )
    }
}

export default BoxColor