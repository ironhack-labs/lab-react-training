import React, {Component} from 'react'
import style from './NumbersTable.css'

class NumbersTable extends Component {
    state = {
        arr: []
    }

    compute = () => {
        let temp =[]
        for(let i = 0 ; i < this.props.limit ; i++ ){
            temp[i] = i
        }
        this.setState({
            arr: temp
        })
    }

    render(){
        return(
            <div>
                <div className="box" onClick= {this.compute}> YO </div>
                <div className="arr" >{this.state.arr} </div>
            </div>
        )
    }
}

export default NumbersTable