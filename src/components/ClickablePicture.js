import React from "react"
import '../components/ClickablePicture.css'

class ClickablePicture extends React.Component {

    state={
        clickedImg : false,
    }

    handlePic = () => {

        this.setState = ({
            clickedImg : !this.state.clickedImg
        })
    }


render() {
    return (
        <div>
            <img onClick={() => {
                this.setState({clickedImg: !this.state.clickedImg})
            }}
             src={this.state.clickedImg ? this.props.img : this.props.imgClicked}
                 />
        </div>
    )
}

}

 export default ClickablePicture