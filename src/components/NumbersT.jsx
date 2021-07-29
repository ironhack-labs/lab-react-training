import React, {Component} from 'react';

class NumbersTable extends Component{
    state={
        cells:[]
    }

    renderTable=(limit=0)=>{
        let {cells} = this.state;

        for(let i=0; i < limit; i ++){
            cells.push(i + 1)
        }
        return (
            <div style={{
                    display:'flex',
                    flexDirection:'row',
                    flexWrap:'wrap',
                    maxWidth:600

            }}>
                {cells.map((item,index_cells)=>(
                    <div style={{
                        width:100,
                        height:100,
            backgroundColor:index_cells % 2 !== 0 ? 'red' : '#fff', 
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        border:'1px solid black'
                }}>
                    <span>{item}</span>
                </div>
            ))}
            </div>
        )
    }


    render({limit}=this.props){
        return(
            this.renderTable(limit)
        )
    }
}

export default NumbersTable;