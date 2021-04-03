import React from 'react';
import SingleColorPicker from './SingleColorPicker';

class RGBColorPicker extends React.Component {
    state = {
        rValue: 0,
        gValue: 0,
        bValue: 0,
    }

    updateColor = (e) => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='RGBColorPicker'>
                <SingleColorPicker 
                    name='R'
                    value={this.state.rValue}
                    onChange={updateColor}
                />
                <SingleColorPicker 
                    name='G'
                    value={this.state.gValue}
                    onChange={updateColor}
                />
                <SingleColorPicker 
                    name='B'
                    value={this.state.bValue}
                    onChange={updateColor}
                />
            </div>
        )
    }


}

export default RGBColorPicker;