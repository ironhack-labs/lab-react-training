import React from 'react';
import './App.css';


class RightArrow extends Component.React{
    render()  {
        return(
            <div className="ForwardArrow" Onclick ={this.props.goToNextSlide}>
                <i className="fa fa-angle-Right fa-3x" aria-hidden="true"></i>
            </div>
        )
    }
}

export default RightArrow;