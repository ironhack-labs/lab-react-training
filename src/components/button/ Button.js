import React from 'react'



class Button extends React.Component {

    colors = ['purple','blue','green','yellow','orange','red']

    state = {
        count: this.props.start,
        rngcolor: "",
    }

    

    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
            rngcolor: this.colors[Math.floor(Math.random()*this.colors.length)]
            
        
        })
        console.log(this.state.divStyle)
    }

    

    render(){
        return <button style={{backgroundColor: this.state.rngcolor}} onClick={this.handleClick}>{this.state.count} Like</button>
    }
}

export default Button