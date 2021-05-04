import React from 'react'

class State extends React.Component {

    state = {
        name: 'Raquel',
        counter: 0
    }
    changeName(){
        if(this.state.name === 'Raquel'){
            this.setState({
                name: 'María'
            })
        } else {
            this.setState({name: 'Raquel'})
        }
    }

    render(){

        return(
            <div className='State'>
                <h1>Hola {this.state.name}!</h1>
                <button onClick={()=>this.changeName()}>Change name</button>

                <div>
                    <p>{this.state.counter}</p>
                    <button onClick={()=>this.setState({counter: this.state.counter - 1})}>-1</button>
                    <button onClick={()=>this.setState({counter: this.state.counter + 1})}>+1</button>
                </div>
            </div>
        )
    }
}

export default State

//setState({})