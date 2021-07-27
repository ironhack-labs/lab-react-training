import { Component } from "react";
import './Rating.css'
class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }
    handleRating(valor) {
        let myComponent = valor
        let blackS = <img src='https://cdn.onlinewebfonts.com/svg/img_63029.png'></img>
        let whiteS = <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/White_Stars_1.svg/600px-White_Stars_1.svg.png' alt='white star'></img>
        if (valor < 0.5) return myComponent = <div className='stars'>
            {whiteS}
            {whiteS}
            {whiteS}
            {whiteS}
            {whiteS}
        </div>
        else if (valor < 1.5) return myComponent = <div className='stars'>
            {blackS}
            {whiteS}
            {whiteS}
            {whiteS}
            {whiteS}
        </div>
        else if (valor < 2.5) return myComponent = <div className='stars'>
            {blackS}
            {blackS}
            {whiteS}
            {whiteS}
            {whiteS}
        </div>
        else if (valor < 3.5) return myComponent = <div className='stars'>
            {blackS}
            {blackS}
            {blackS}
            {whiteS}
            {whiteS}
        </div>
        else if (valor < 4.5) return myComponent = <div className='stars'>
            {blackS}
            {blackS}
            {blackS}
            {blackS}
            {whiteS}
        </div>
        else if (valor > 4.5) return myComponent = <div className='stars'>
            {blackS}
            {blackS}
            {blackS}
            {blackS}
            {blackS}
        </div>
        return myComponent
    }
    render() {
        return (
            <div value={this.props.value} >
                {this.handleRating(this.props.value)}
            </div>
        )
    }
}

export default Rating