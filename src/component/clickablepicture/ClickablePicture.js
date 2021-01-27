import React, { Component } from 'react'

class ClickablePicture extends Component {
    constructor(props){
        super(props)
        this.state={
            img:this.props.img,
            imgClick:this.props.imgClicked,
            alt:'Person no Glasses'
        }
    }

    imageClicked = () =>{
        const currentImg = this.state.img
        const newImg = this.state.imgClick
        const newAlt = newImg.includes('glasses') ? 'person with Glasses' : 'Person no Glasses'

        this.setState({
            img: newImg,
            imgClick: currentImg,
            alt: newAlt
        })

    }

    render() {
        return (
            <div>
                <img src={this.state.img} onClick={this.imageClicked} alt={this.state.alt}/>
            </div>
        )
    }
}
export {ClickablePicture}