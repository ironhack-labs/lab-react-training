import React from 'react'

class NumbersTable extends React.Component {
    state = {
        cells: []
    }

    // render() {
    //     this.setState((state) => ({
    //         cells: state.cells
    //     }));
    //     console.log('test cells:', this.state.cells)
    //     return (
    //       <>
    //         {console.log('test cells:', this.state.cells)}
           
    //       </>
    //     );
    // }

  
    render() {
        this.setState((state) => ({
            cells: state.cells
        }));

        for (let i = 0 ; i< this.props.limit; i++){
            this.state.cells.push(i+1)
        }


    function buildTable(arr){
        const rows = arr.map((row,i) => { 
            return <tr style={{backgroundColor: i%2 ? '#F0FFF2':'white'}} key={i}>
                      <td>{row[0]}</td><td>{row[1]}</td>
                   </tr> 
        })
        return <table><tbody>{rows}</tbody></table>
      }
    
      return buildTable(this.state.cells);
      
    }
    
}

export default NumbersTable;