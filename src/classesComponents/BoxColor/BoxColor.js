import React from 'react';

class BoxColorClass extends React.Component{
  getHex(r,g,b){
    let rHex = r.toString(16)
    let gHex = g.toString(16)
    let bHex = b.toString(16)
    if(rHex.length === 1) rHex = '0' + rHex
    if(gHex.length === 1) gHex = '0' + gHex
    if(bHex.length === 1) bHex = '0' + bHex
    return ('#' + rHex + gHex + bHex)
  }
  render(){
    return(
      <div className='container-col'
      style={{backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`, color: this.props.color}}
      >
        <p>{`rgb(${this.props.r}, ${this.props.g}, ${this.props.b}}`}</p>
        <p className='margin-top'>{this.getHex(this.props.r, this.props.g, this.props.b)}</p>
      </div>
    )
  }
}

export default BoxColorClass