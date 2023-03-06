import React from 'react';
import './index.css'


       
class ClickablePicture extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            // img: img,
            // imgClicked: imgClicked
        }
    }
    render() {
        return(
            <div className='ClickablePicture'>
                {/* <button><img src={this.state.img}/></button> */}
            </div>
        )
        };
};

export default ClickablePicture;