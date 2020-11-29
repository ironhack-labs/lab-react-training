import React from 'react';

class LeftArrow extends Component.React{
    render()  {
        return(
            <div className="backArrow" Onclick ={this.props.goToPrevSlide}>
                <i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
            </div>
        )
    }
}

export default LeftArrow;