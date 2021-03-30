import React, {Component} from 'react' 
import '../assets/css/ClickablePicture.css'

class ClickablePicture extends Component {
        state = {
            click: false
        }

        changeImg = () => {
            this.setState(({ click }) => ({ click: !click }))
        }


        render(){
       
            return (
                <div className="imageClick">
                 <img className="image" src={this.state.click ? this.props.imgClicked : this.props.img} onClick={this.changeImg}/>
                </div>
            )

        }


}

export default ClickablePicture