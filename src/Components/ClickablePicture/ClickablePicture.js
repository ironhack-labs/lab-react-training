import React, {Component} from 'react'
import Style from './ClickablePicture.css'

class ClickablePicture extends Component {
    state = {
        image2: undefined
    }

    clicked = () =>{
        switch (this.state.image2) {
            case undefined:
                this.setState({
                    image2: '../../img/glasses.png'
                });
                break
            default:
                this.setState({
                    image2: undefined
                });
        }
    } 
    render(){
        return(
            <div className="parent"> 
                <img className="image1" onClick={this.clicked} src={this.props.img}></img>
                <img className="image2" onClick={this.clicked} src={this.state.image2}></img>
            </div>
        )

    }
}

export default ClickablePicture