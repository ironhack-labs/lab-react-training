import React from 'react';



class ClickablePicture extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showImgClicked: false,
            img: true
        }

    }
    changeImage = () => {
        this.setState(prev =>
        ({
            showImgClicked: !prev.showImgClicked,
            img: !prev.img
        }))
    }

    render() {
        const { imgClicked, img } = this.props
        return (
            
            <div>
                {this.state.img && <img src={img} alt='Glasses' onClick={() => this.changeImage()} />}
                {this.state.showImgClicked && <img src={imgClicked} alt='NoGlasses' onClick={() => this.changeImage()} />}
            </div>

        )

    }

}

export default ClickablePicture