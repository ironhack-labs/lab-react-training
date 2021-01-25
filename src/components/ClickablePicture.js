import React from "react"
import '../components/ClickablePicture.css'

class ClickablePicture extends React.Component {

    state={
        cklickedImg : false,
    }

    handlePic = () => {

        this.setState = ({
            cklickedImg : !this.state.cklickedImg
        })
    }


render() {
    return (
        <div>
            <img src={this.state.cklickedImg ? this.props.imgClicked : this.props.img}
                 onClick={this.handlePic}/>
        </div>
    )
}

}

 export default ClickablePicture