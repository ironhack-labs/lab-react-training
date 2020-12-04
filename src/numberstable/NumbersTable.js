import React, { Component } from 'react'


export default class NumbersTable extends Component {
    constructor(props){
        super(props);
        this.state={
            arr:Array.from(Array(props.limit).keys()),
        }
    }


    render() {
        return (
            <div style={{display:'flex',flexWrap:'wrap'}}>
              {this.state.arr.map(el=>{
                  if((el+1)%2===0)
                  return(
                      <div style={{border:'1px solid',width:'50px', height:'50px', backgroundColor:'red'}}><p>{el+1}</p></div>
                    )
                else
                return(
                      <div style={{border:'1px solid',width:'50px', height:'50px'}}><p>{el+1}</p></div>
                    )
              })}  
            </div>
        )
    }
}
