import React from 'react'

class ClickablePicture extends React.Component{

    state = {
        img: '/img/persons/maxence.png',
    }

    changeImg(){
        if (this.state.img === '/img/persons/maxence.png'){
            this.setState({img: '/img/persons/maxence-glasses.png'})
        } else {
            this.setState({img: '/img/persons/maxence.png'})
        }
    }

    render(){
        
        return(
            <div>
                <img onClick={()=>this.changeImg()} src={this.state.img} alt={this.state.img}/>
            </div>
        )
    }
}

export default ClickablePicture
