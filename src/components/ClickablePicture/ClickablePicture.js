import React, {Component} from 'react';

class ClickablePicture extends Component {

    state = {
        img: this.props.img
    }
      
      toggleGlasses = () => {
          if (this.props.img === this.state.img) {
              this.setState({
                  img: this.props.imgClicked
                })
            } else {
                this.setState({
                    img: this.props.img
                })
            }  
    }
    
    render() {
        return(
            <div>
            <img onClick={() => this.toggleGlasses()} src={this.state.img} />
            </div>
        )
    }
}

export default ClickablePicture