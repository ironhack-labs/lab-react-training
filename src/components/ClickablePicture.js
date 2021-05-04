import React from 'react'

class ClickablePicture extends React.Component{
    state = {
        img: 'maxence.png'
    }
    changePic(){
        if (this.state.img === 'maxence.png') {
            this.setState({...this.state, img: 'maxence-glasses.png'})
          } else {
            this.setState({...this.state, img: 'maxence.png'})
          }
        }
    

    render() {
        return(
            <div className="ClickablePicture">
                <img onClick={() => this.changePic()} src={process.env.PUBLIC_URL + `/img/persons/${this.state.img}`} alt="gif"/>
            </div>
        )
    }
}

export default ClickablePicture