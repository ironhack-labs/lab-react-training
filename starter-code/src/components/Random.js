import React, { Component } from 'react'

export default class Random extends Component {
    GetRandom=(x)=>{
        const {min,max}=x;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    render() {
        return (
            <div>
                <div style={{
                background:'#ccedd2', 
                width:'90%', 
                margin:'25px', 
                border:'2px solid balck',
                borderRadius:'20px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
                }}>
                <h3>
                Random value between {this.props.min} and {this.props.max} => {this.GetRandom(this.props)}  
                </h3>
                  
                </div>
            </div>
        )
    }
}
