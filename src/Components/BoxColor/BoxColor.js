import React, {Component} from 'react';
import './BoxColor.css';

class BoxColor extends Component {
    render(){
        let {r,g,b} = this.props;
        const palette = `rgb(${r}, ${g}, ${b})`
        const compToHexa = (color) => {
            let hexa = color.toString(16);
            return hexa.length === 1 ? "0" + hexa : hexa;
        }

        const rbgToHexa = (r,g,b) => {
            return '#' + compToHexa(r) + compToHexa(g) + compToHexa(b);
        }

        return (
            <div className="color-box" style={{backgroundColor: palette}}>
                <p>{palette}</p>
                <p>{rbgToHexa(r, g, b)}</p>
            </div>
        );
    };
}

export default BoxColor;