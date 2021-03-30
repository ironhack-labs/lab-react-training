import React,{Component} from 'react'
import '../assets/css/Carousel.css'

export default class Carousel extends Component{
    state = {
        counter:0
    }

    handleClickLeft=()=> {
        this.counter=== 0 ? this.setState({counter:this.props.imgs.length -1}) : this.setState({counter:this.state.counter -=1})
           
    }
    handleClickRight=()=> {
        this.state.counter=== this.props.imgs.length -1 ? this.setState({counter:0}) : this.setState({counter: this.state.counter +=1})
    }

    render(){
        return(
            <div className='box__img'>
                <button onClick={this.handleClickLeft} className='button__left'>Left</button>
                <img src={this.props.imgs[this.state.counter]} alt=''></img>
                <button onClick={this.handleClickRight} className='button__right'>Right</button>
            </div>
        )
    }
}