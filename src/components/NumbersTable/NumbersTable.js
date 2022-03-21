import React, {Component} from "react";
import './NumbersTable.css';

class NumbersTable extends Component {
    state = {
        items: []
    };

    componentDidMount(){
        this.addItems();
    }

    addItems(){
        const numbersArr = [];

        for(let i = 1; i <= this.props.limit; i++){
            numbersArr.push(i);
        }

        this.setState({
            items: numbersArr
        })
    }


    render(){
        return (
            <div className="container numbers-table-div mt-3">
                {
                    this.state.items.map((item, index) => {
                        return (
                            <div style={{backgroundColor: (index + 1) % 2 === 0 ? "red" : "white"}} className="numbers-table-item" key={index}>
                                <p>{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    };
}

export default NumbersTable;