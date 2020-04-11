import React, {Component} from 'react'

class ClickablePicture extends Component {

    clicked(){

    }
    render(){
        return(
            <div>
                <img onClick={this.clicked} src={this.props.img}></img>

            </div>
        )

    }
}



export default ClickablePicture