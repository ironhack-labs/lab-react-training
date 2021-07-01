import { Component } from 'react'
import './Button.css'

class Button extends Component {

    render() { 
        // const {counter} = this.state;
        const {children, type="Default", onClick} = this.props;
        return ( 
            <button onClick={onClick} type="submit" className={"Button " + type} >
                {children} 
            </button>
         );
    }
}
 
export default Button;