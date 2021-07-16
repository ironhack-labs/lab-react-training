import React from 'react';

class ClickablePicture extends React.Component {

state = {
    isClicked: false

  }

  clickHandler = () => {
    this.setState((state) => ({
      isClicked: !state.isClicked 

    }));
  }    

  render() { 

    return (

        <img src= {this.state.isClicked ? '/img/IMG_20190117_164935.jpg' : 
            
            '/img/IMG_20200421_101728.jpg'}

            onClick= {this.clickHandler}

            alt="Brazil donde el tipo se busca" className="foro-pic"/>
    )
}

}

export default ClickablePicture
