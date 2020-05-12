import React, { Component } from "react";

export default class LikeButton extends Component {
    
    state = {
        value: 0
    };

    // Esto también funciona para los clics posteriores, de ser necesario:
    // listener = () => {
    //     console.log(this.state.value);
    // }

    // componentDidMount() {
    //     window.addEventListener("click", this.listener);
    // }

    render() {

        function getColor(idx) {
            return ['purple', 'blue', 'green', 'yellow', 'orange', 'red'][idx % 6];
        };
    

        // ATENCIÓN: +++ Este método NO PUEDE LEER el estado posteriormente si se llama desde render()
        // https://medium.com/geographit/accessing-react-state-in-event-listeners-with-usestate-and-useref-hooks-8cceee73c559
        // function handleClick() {
        //     this.setState({ value: this.state.value + 1 });
        // }

        // return (
        //     <div className="LikeButton">
        //         <button onClick={ () => handleClick() } style={{background: `${getColor(this.state.value)}`}} >{this.state.value} Likes</button>
        //     </div>
        // );

        // Ni aún mandando el state como parámetro:
        // function handleClick(value) {
        //     this.setState({ value: value + 1 });
        // }

        // return (
        //     <div className="LikeButton">
        //         <button onClick={ () => handleClick(this.state.value) } style={{background: `${getColor(this.state.value)}`}} >{this.state.value} Likes</button>
        //     </div>
        // );

        // Pero DE ESTA FORMA SÍ FUNCIONA, LEYENDO EL ESTADO EN UNA ARROW FUNCTION
        return (
            <div className="LikeButton">
                <button onClick={ () => this.setState({ value: this.state.value + 1 }) }
                style={{background: `${getColor(this.state.value)}`, color: "white", fontSize: "xx-large", float:"left", margin: "5px"}} >
                    {this.state.value} Likes
                </button>
            </div>
        );
    }
}