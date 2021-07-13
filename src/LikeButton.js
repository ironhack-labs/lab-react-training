import React from "react"


class Counter extends React.Component{

    state = {
        counter: 0
    }
    //1. Create a button that calls a handleIncrementCounter
    //2. The function should add 1 to the current state

    handleIncrementCounter = () =>{
        const colorArray = ['purple','blue','green','yellow','orange','red']
        let random = Math.floor(Math.random() * (colorArray.length - 0 + 1) + 0)
        const divStyle = {
            backgroundColor: `${ colorArray[random] }`,
        };
    
        //Esse tá ok, mas o outro é melhor
        // this.setState({
        //     counter:  this.state.counter +1
        // })
        //A documentação fala que quando formos referenciar um valor anterior devemos usar outra abordagem:
        //When the state is based on the previous state!
        this.setState((state)=>{
            return {
                divStyle,
                counter: state.counter +1
            }
        })
    }
    handleIncrementColor = () =>{
        const colorArray = ['purple','blue','green','yellow','orange','red']
        let random = Math.floor(Math.random() * (colorArray.length - 0 + 1) + 0)
        const divStyle = {
            backgroundColor: `${ colorArray[random] }`,
        };
        return divStyle;
    }

    render(){
        const {counter} = this.state
        return(
            <>
            <button className="button-like" style={this.handleIncrementColor()} onClick={this.handleIncrementCounter}>{counter} Likes</button>

            </>
        )
    }
}

export default Counter