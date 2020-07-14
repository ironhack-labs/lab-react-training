import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'


class RGBColorPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rValue: 0,
            gValue: 0,
            bValue: 0
        }
    }

    rgbToHex = (r, g, b) => {
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }
    
    divStyle =(r,g,b)=> {
        return{
            backgroundColor: this.rgbToHex(r,g,b),
        }
    }

    colorBox= (c)=> {
        if (c === 'r'){
            return(
            <div>
                <div style={this.divStyle(this.state.rValue,0,0)}>.</div>
            </div>
        )
        }else if(c === 'g'){
            return(
            <div>
                <div style={this.divStyle(0,this.state.gValue,0)}>.</div>
            </div>
        )
        }else if(c === 'b'){
            return(
            <div>
                <div style={this.divStyle(0,0,this.state.bValue)}>.</div>
            </div>
        )
        }else if(c === 'rgb'){
            console.log(this.state)
            return(
            <div>
                <div style={this.divStyle(this.state.rValue,this.state.gValue,this.state.bValue)}>.</div>
            </div>
        )
        }
    }
    colorChange= ({target}, value) => {
        if(target.value>255){
            target.value=255
        }else if(target.value<0){
            target.value=0
       }
        this.setState((state) => ({[value]: target.value}))
    }



    render() {
        return (
            <div className='container-rgb'>
                <div className='container-color'>
                    {this.colorBox('r')}
                    <p>R:</p>
                    <SingleColorPicker color='r' value={this.state.rValue} onChange={(e) => this.colorChange(e, 'rValue')}/>
                </div>
                <div className='container-color'>
                    {this.colorBox('g')}
                    <p>G:</p>
                    <SingleColorPicker color='g' value={this.state.gValue} onChange={(e) => this.colorChange(e, 'gValue')}/>
                </div>
                <div className='container-color'>
                    {this.colorBox('b')}
                    <p>B:</p>
                    <SingleColorPicker color='b' value={this.state.bValue} onChange={(e) => this.colorChange(e, 'bValue')}/>
                </div>
                <div className='container-color'>
                    {this.colorBox('rgb')}
                    <div>
                        <p>rgb({this.state.rValue}, {this.state.gValue}, {this.state.bValue})</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default RGBColorPicker
