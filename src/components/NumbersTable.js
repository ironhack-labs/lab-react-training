import React from 'react'
import './NumbersTable.css'


class NumbersTable extends React.Component{
    
    constructor(props) {
        super(props);

        this.boxes = []

        for (let i=1; i <= this.props.limit; i++) {
            let boxBackground = (i%2 === 0) ? 'even-box': 'odd-box'
            this.boxes.push(<div className={`box ${boxBackground}`}><span>{i}</span></div>)
        }
        
    }

    render() {

        return(
            <div className="box-container">
                {this.boxes}
            </div>
        );
    }
}



export default NumbersTable;
