import React, { Component } from 'react'

export default class IdCard extends Component {
    render() {
        return (
            <div style={{
                background:'#f3dfe3', 
                width:'90%', 
                margin:'25px', 
                border:'2px solid balck',
                borderRadius:'20px',
                display:'flex',
                flexDirection:'row',
                justifyContent:'flex-start'
                }}>
            <img src={this.props.picture} style={{height:'200px', 
                                                width:'200px',
                                                padding:'15px',
                                                borderRadius:'40px'
                                                }} 
                                                alt="face"></img>
            <div style={{
                marginLeft:'15px', 
                display:'flex',
                flexDirection:'column'
                }}>
            <p style={{margin:'12px'}} ><b>First Name: </b> {this.props.firstName}</p>
            <p style={{margin:'12px'}} ><b>Last Name: </b> {this.props.lastName}</p>
            <p style={{margin:'12px'}} ><b>Gender: </b> {this.props.gender}</p>
            <p style={{margin:'12px'}} ><b>Height: </b> {this.props.height}</p>
            <p style={{margin:'12px'}} ><b>Birth: </b> {this.props.birth.toLocaleDateString()}</p>

            </div>
                
            </div>
        )
    }
}
