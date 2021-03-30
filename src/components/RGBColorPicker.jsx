import { Component } from "react"
import '../assets/css/RGBColorPicker.css'
import SingleColorPicker from './SingleColorPicker'

class RGBColorPicker extends Component {

    state = {
        rValue: 0,
        gValue: 0,
        bValue: 0
    }
    
    handleValues = (event) => {
    
      if(event.target.name === 'red'){
        if(event.target.value > 255){
          this.setState({
            rValue: 0
          })
        }else{
        this.setState({
          rValue: event.target.value
        }) }
      }else if(event.target.name === 'green'){
        if(event.target.value > 255){
          this.setState({
            gValue: 0
          })
        }else{
        this.setState({
          gValue: event.target.value
        }) }
      }else{
        if(event.target.value > 255){
          this.setState({
            bValue: 0
          })}else{
        this.setState({
          bValue: event.target.value
        }) }
      }
    }

    rgbToHex =  (r,g,b) => { 
      r = r.toString(16);
      g = g.toString(16);
      b = b.toString(16);
    
      if (r.length == 1)
        r = "0" + r;
      if (g.length == 1)
        g = "0" + g;
      if (b.length == 1)
        b = "0" + b;
    
      return "#" + r + g + b;
    }
    

    render() {
      const finalColor = this.rgbToHex(this.state.rValue,this.state.gValue,this.state.bValue)
      console.log(finalColor)
      return(
        <div className='RGBColorPicker d-flex'>
          <SingleColorPicker originalColor= 'red' onChange={this.handleValues}/>
          <SingleColorPicker originalColor= 'green' onChange={this.handleValues}/>
          <SingleColorPicker originalColor= 'black' onChange={this.handleValues}/>
          <div className='FinalColorRectangle' style={{backgroundColor: finalColor}}></div>
          <h3 className='mx-2 my-2 '>rgb({this.state.rValue},{this.state.gValue}, {this.state.bValue} )</h3>
        </div>
      ) 
      
    }
  }

  export default RGBColorPicker