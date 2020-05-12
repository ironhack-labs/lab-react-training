import React, { Component } from "react";

export default class ClickablePicture extends Component {
    
    constructor() {
        super();
        // https://ed.team/blog/no-uses-getelementbyid-en-react-usa-las-referencias
        // https://en.reactjs.org/docs/refs-and-the-dom.html
        // Crea la referencia al button y al handler:
        this.button = React.createRef();
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
        this.updatePhoto = this.updatePhoto.bind( this );
    }
    
    state = {
        clicked: false
    };

    // Función auxiliar
    definePhoto = () => {
        this.setState({ clicked: ! this.state.clicked })
        if (this.state.clicked) return this.props.img;
        return this.props.imgClicked;
    }

    // Handler
    updatePhoto = () => {
        // Se accesa al objeto de referencia con .current
        this.button.current.src = this.definePhoto();
    }

    render() {
        const style = {
            width: 150
        }
        return (
            <div>
            {/* Se ligan las dos cosas: el handler y la referencia al objeto porque se va a requerir cambiar sus propiedades después */}
                <img ref={this.button} onClick={this.updatePhoto} src={this.props.img} alt="img" style={style} />
            </div>
        );
    }

}