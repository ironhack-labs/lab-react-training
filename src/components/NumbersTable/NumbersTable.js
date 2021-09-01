import "./NumbersTable.css"
import { Component } from "react"

class NumbersTable extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        const jsxArr = (max) => {
            let divsArr = []
            for (let i = 1; i < max + 1; i++) {
                if (i % 2 === 0) {
                    divsArr.push({
                        index: i,
                        style: {backgroundColor: "red", width: "80px", height: "60px"},
                    })
                } else {
                    divsArr.push({
                        index: i,
                        style: {backgroundColor: "transparent", width: "80px", height: "60px"}
                    })
                }
            }
            return divsArr
        }

        return (
            <div className="NumbersTable">
                {(jsxArr(this.props.limit)).map((el) => <div className="numberBox" style={el.style}> {el.index} </div>)}
            </div>
        )
    }
}

export default NumbersTable