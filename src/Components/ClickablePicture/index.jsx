import React from 'react';
import './index.css'


       
class ClickablePicture extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            image: props.img,
           
        }
    }

    changeImage = () => {
        if(this.state.image === this.props.img) {
            this.setState({
                image: this.props.imgClicked,
        })
        } else {
            this.setState({
                image: this.props.img,
        })
        }
          

        }
    
    render() {
        return(
            <div className='ClickablePicture'>
                <button onClick={this.changeImage}><img src={this.state.image}/></button>
            </div>
        )
        };
};

export default ClickablePicture;