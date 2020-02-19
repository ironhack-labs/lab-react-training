import React, { Component } from 'react'

export default class CreditCard extends Component {
    GiveMyLogo=(x)=>{
        const {type}=x
        if(type==='Visa')
        return ('../img/visa.png')
        return ('../img/master-card.svg')
    }
    render() {
        return (
            <div className="CreditCard" style={{
                background:`${this.props.bgColor}`,
                color:`${this.props.color}`, 
                width:'350px', 
                height:'216px',
                margin:'0', 
                border:'2px solid balck',
                borderRadius:'20px',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'space-around',
                
                }}>
                <div style={{padding:'10px 25px',alignSelf:'flex-end'}}>
                <img style={{height:'25px'}} src={this.GiveMyLogo(this.props)} alt="logo"></img>
                </div>
                <div style={{padding:'0',alignSelf:'center',display:'flex',flexDirection:'row'}}>
                <h2 style={{fontSize:'4rem',margin:'0',alignSelf:'center'}}>&#xB7;&#xB7;&#xB7;&#xB7; &#xB7;&#xB7;&#xB7;&#xB7; &#xB7;&#xB7;&#xB7;&#xB7;</h2>
                <h2 style={{padding:'0 10px',alignSelf:'center',fontSize:'2rem'}}> 
                {
                    (()=>{
                        const num=this.props.number.substr(12,4)
                        return num
                    })()
                }</h2>
                </div>
                <div style={{padding:'10px 25px',alignSelf:'flex-start'}}>
                <span>Expires {this.props.expirationMonth}/{this.props.expirationYear}</span>
                <span style={{paddingLeft:'35px'}}>{this.props.bank}</span>
                <p style={{margin:'5px 0'}}>{this.props.owner}</p>
                </div>
            </div>
        )
    }
}
