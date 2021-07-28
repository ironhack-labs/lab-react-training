import { Component } from "react"; 
import img from './maxence.png'
import imgGla from './maxence-glasses.png'
class ClickablePicture extends Component{
    state = {
        glasses: false
    }
    handleGlasses = () =>{
        this.setState({
           glasses: !this.state.glasses 
        })
    }
    render (){
        return(
            <div>
                {
                    this.state.glasses ? 
                    <img src = {imgGla} onClick = {this.handleGlasses}></img>:
                    <img src = {img} onClick = {this.handleGlasses}></img>    
                }
            </div>
        )
    }
}

export default ClickablePicture