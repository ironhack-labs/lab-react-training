import React from 'react';
import './SingleColorPicker.css';

class SingleColorPicker extends React.Component {
    
    render(){
        const { value, color } = this.props;

        return (
            <div className='single-color-picker-div'>
                <div 
                    className="single-color-picker" 
                    style={{backgroundColor: `rgb(${color === 'r' ? value : 0},${color === 'g' ? value : 0},${color === 'b' ? value : 0})`}}
                >
                </div>
                <p>{color.toUpperCase()}:</p>
                <input type="number" name={`${color}Value`} value={value} onChange={this.props.onChange}/>
            </div>
        );
    };
};

export default SingleColorPicker;