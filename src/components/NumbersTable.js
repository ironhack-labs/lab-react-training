import React, { Component } from "react"

class NumbersTable extends Component {
    state = {
        blocksArray: []
    }

    componentDidMount() {
        this.renderBlocks()
    }

    renderBlocks = () => {
        let { limit } = this.props
        const blocks = []
        while (limit !== 0) {
            limit--
            blocks.push("block")
        }
        this.setState({
            blocksArray: blocks
        })
    }

    render() {
        return (
            <div>
                {this.state.blocksArray?.map((b, index) => {
                    return <div key={index} style={{backgroundColor: (index + 1) % 2 === 0 ? "red" : "white"}}>
                        {index + 1}
                    </div>
                })}
            </div>
        )
    }
}

export default NumbersTable;