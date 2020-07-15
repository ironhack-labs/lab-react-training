import React, { Component } from 'react'

class Carousel extends Component {
    constructor(props){
        super(props)
        this.state={
            imagenes:props.imgs,
            imagenActual:0
        }
    }

    changeLeft=()=>{
        if(this.state.imagenActual === this.state.imagenes.length-1){
            this.setState({imagenActual:this.state.imagenActual})
        }else{
            this.setState({imagenActual:this.state.imagenActual +1})
        }
    }

    changeRigth=()=>{
        if(this.state.imagenActual === 0){
            this.setState({imagenActual:this.state.imagenes.length-1})
        }else{
            this.setState({imagenActual:this.state.imagenActual - 1})
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.changeLeft}>L</button>
                <img src={this.state.imagenes[this.state.imagenActual]} alt="imagen"></img>
                <button onClick={this.changeRigth}>R</button>
            </div>
        )
    }
}

export default Carousel
