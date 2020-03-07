import React from "react";
import '../styles/BoxColor.css';

function BoxColor(props) {

    let red = props.red;
    let green = props.green;
    let blue = props.blue;

    const styles = {
        backgroundColor: 'rgb('+red+','+green+','+blue+')',
        fontSize: '60px',
    }

    return (
        <div style={styles}  className="boxColorContainer">
            <p>rgb({red}, {green}, {blue})</p>
        </div>
    );
};
  
  export default BoxColor;
