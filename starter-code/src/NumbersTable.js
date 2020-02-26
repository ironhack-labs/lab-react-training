import React, { Component } from 'react';

class NumbersTable extends Component {

    style= {
        background:'red'
    }

    render(){
        let tableArray = [];
        for(let i=1;i<=this.props.limit;i++){
            tableArray.push(i)
        }

        return (
        <div className="table">
            {
                tableArray.map(item=>{

                    if(item%2===0){
                        return <span style={this.style}>{item}</span>
                    }
                    else{
                        return <span>{item}</span>
                    }
                })
            }
        </div>
        
        )
    }

};

export default NumbersTable;