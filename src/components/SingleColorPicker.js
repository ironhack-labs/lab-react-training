import React, { Component } from 'react';
import { FormGroup, Label, Input, FormFeedback} from 'reactstrap';

//IT.16(2)
class SingleColorPicker extends Component {

    render() {
        const {color, value, onChange} = this.props;
        const colorBoxStyle = {backgroundColor: color, width: "100px", height: "100px"};
        const isValid = value >= 0 && value <= 255 ? true : false;
        return (
            <div className="IdCard">
                <div className="left" style={colorBoxStyle}></div>
                <div className="right">
                    <FormGroup  className="IdCard">
                        <Label className="left" for="number">{color.substring(0, 1)}</Label>
                        <Input 
                            className="right"
                            type="number" 
                            name={color}
                            id={color} 
                            onChange={onChange}
                            value={value}
                            invalid= {!isValid} 
                            min={0}
                            max={255} 
                        />
                        <FormFeedback>value must be between 0 and 255</FormFeedback>
                    </FormGroup>
                </div>
            </div>
        );
    }
};
    
export default SingleColorPicker;