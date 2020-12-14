//Paso I:Importaciones
import { render } from '@testing-library/react'
import React, {Component} from 'react'
import '../css/App.css'



//Paso II: Clases o Funciones 

class BoxColor extends Component {
    

    render({r, g, b}=this.props) {
    
    const divStyle ={backgroundColor: `rgb(${r}, ${g}, ${b})`}
    
    return (
    
        <div className='boxColorCont' style={divStyle}>
            <p> rgb({r},{g},{b}) </p>
        </div>
    
        
    )}
}

//Paso III:Exportaciones
export default BoxColor;