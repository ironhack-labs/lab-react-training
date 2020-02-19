import React, {Component} from 'react'



class Idcard  extends Component{
    render(){
        return (
            <div className="cardContainer">
            <div>
            <img src={this.props.picture} alt=""/>
            </div>
                <p>{this.props.lastName}</p>
                <p>{this.props.firstName}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.height}</p>
                <p>{this.props.birth.toDateString()}</p>
            </div>
        )

    }

}



export default Idcard