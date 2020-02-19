import React, {Component} from 'react'

class Card extends Component{
    render(){
        return (
            <div >
                <div className="containerImg">
                    <img    src={this.props.img}  alt="Image"/>
                </div>
                <p>Last Name:{this.props.lastName}</p>
                <p>first Name:{this.props.firstName}</p>
                <p>Gender:{this.props.gender}</p>
                <p>height:{parseInt(this.props.height)/100}m</p>
                <p>Birth:{this.props.birth.toDateString()}</p>                
            </div>
        )
    }

}

export default Card