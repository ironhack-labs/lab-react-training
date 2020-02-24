import React, {Component} from 'react'
 
class ClickablePicture extends Component{

    
    state={
        togle: true
    }
     togleImagen =() => {
         console.log(this.state)
         this.setState({
            togle: this.toggleImagen(this.state.togle)
        }) 
     
    } 
    toggleImagen = (togle)=>{
        if(togle === true){
            return togle = false
        }else{
            return togle= true
        }
    }
    render(){

        return(
            <img src={ this.state.togle ? this.props.img : this.props.imgClicked}  alt="" onClick={this.togleImagen} />
        )
    }
}
export default ClickablePicture