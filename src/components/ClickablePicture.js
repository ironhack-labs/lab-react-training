import React, {Component} from 'react'

class ClickablePicture extends Component {
    constructor(props){
        super(props)
        this.state= {
            click: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(previousState => ({
            click: !previousState.click
        }))
    }
    
    render() {

        let {img, clicked} = this.props;
        
        return(
            <div className="">
             <img className="picture" src= {(this.state.click && clicked) || img } onClick={this.handleClick} alt=""/>
            </div>      
    )

    }
}


export default ClickablePicture;
