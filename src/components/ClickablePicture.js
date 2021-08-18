import React from 'react';

class ClickablePicture extends React.Component {
    state = {
        withGlasses : false
    }

    clickHandler = () => {
        this.setState (
            {
                withGlasses: !this.state.withGlasses
            }
        )
    }

    render(){
        return (
            <button className='clickablePic' onClick={this.clickHandler}>
                {this.state.withGlasses ? <img className='glasses' src={this.props.imgClicked} alt='photo of person with glasses'/> : <img className ='noGlasses' src={this.props.img} alt='photo of person without glasses'/>}
            </button>
        )
    }
}

export default ClickablePicture