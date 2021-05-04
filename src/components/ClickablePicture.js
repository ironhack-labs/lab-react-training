import React from 'react'


class ClickablePicture extends React.Component{

    state = {
        img: this.props.img,
    }

    switchImage(){
        if(this.state.img === this.props.img){
            this.setState({img: this.props.imgClicked})
        }else{
            this.setState({img: this.props.img})
        }
    }

    render(){
        return (
            <div className="ClickablePicture">
                <button onClick={()=>this.switchImage()}><img src={this.state.img} alt={this.state.img} /></button>
            </div>

        )
    }
}


export default ClickablePicture