import React, { Component } from 'react';



class NumbersTable extends Component {

  
  
  render() {

    const limit = this.props.limit;
    let array = [];


    for(let i=1;i<=limit;i++){
      array.push(i);
    };

    
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        fontWeight: '800',
        justifyContent: 'center',
        width: '6em',
        height:'6em',
        border: '1px solid black'
    };

    const divStyleColor={
      display: 'flex',
      alignItems: 'center',
      fontWeight: '800',
      justifyContent: 'center',
      width: '6em',
      height:'6em',
      border: '1px solid black',
      backgroundColor: 'red'
    }

    const app ={
      display: 'flex',

    };

    
    return( 
      <div style={app}>

        {  array.map( item => {
          if(item%2 !== 0) {
            return (<div style={divStyle}>
                      {item}
                    </div>);
          }else{
            return (<div style={divStyleColor}>
                      {item}
                    </div>);
          }
            
        })} 
        
        
       
        
      </div>
    );
  }
};


export default NumbersTable;