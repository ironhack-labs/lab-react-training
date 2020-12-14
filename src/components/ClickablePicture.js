//Paso I:Importaciones
import { render } from '@testing-library/react'
import React, {Component} from 'react'
import '../css/App.css'



//Paso II: Clases o Funciones 

class ClickablePicture extends Component {
    
    
    state = {
        clicked: false,
        pic: 'empty'
    }
    
    render ({img, imgClicked}=this.props) {

        if (this.state.pic === 'empty') {
            this.setState({
                pic: img
            })
        }

        return (
            <div className='picCont'>
                <img src={this.state.pic} onClick={
                    (e) => {
                        if(this.state.clicked) {
                            return this.setState({
                                clicked: false,
                                pic: img
                            })
                        } else {
                            return this.setState({
                                clicked: true,
                                pic: imgClicked
                            })
                        }
                    }
                }/>
            </div>
        )

    }
    
}

//Paso III:Exportaciones
export default ClickablePicture;