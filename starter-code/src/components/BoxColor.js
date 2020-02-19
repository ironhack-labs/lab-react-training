import React, { Component } from 'react'

export default class BoxColor extends Component {
    GiveMeHex=(x)=>{
        let {r,g,b}=x;
       // let alpha=255;
        r=r.toString(16);
        g=g.toString(16);
        b=b.toString(16);
       // alpha=alpha.toString(16);

        r.length===1?r+='0':r=r
        g.length===1?g+='0':g=g
        b.length===1?b+='0':b=b
        
        return ('#'+r+g+b)
    }
    render() {
        return (
            <div style={{
                background:`rgb(${this.props.r},${this.props.g},${this.props.b})`, 
                opacity:'1',
                width:'90%', 
                margin:'25px', 
                border:'2px solid balck',
                borderRadius:'20px',
                display:'flex',
                flexDirection:"column",
                alignItems:'center',
                justifyContent:'center'
                }}>
                <h3>rgb({this.props.r},{this.props.g},{this.props.b})</h3>
                <h3>{this.GiveMeHex(this.props)}</h3>
            </div>
        )
    }
}
