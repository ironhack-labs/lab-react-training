import React, { Component } from 'react';

class NumbersTable extends Component {
    render({limit} = this.props) {
        let boxArr = [];

        for(let i = 0; i < limit; i++){
            if(i%2===0){
                boxArr.push(<span className="number-box">{i+1}</span>);
            }else{
                boxArr.push(<span className="number-box red">{i+1}</span>);
            }
        }

        return (
            <div>
                {boxArr}
            </div>
        );
    }
}

export default NumbersTable;