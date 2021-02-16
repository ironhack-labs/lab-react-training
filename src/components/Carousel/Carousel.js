import React,{Component} from "react"

class Carousel extends Component {
    state={
    num:0,
    img: this.props.imgs[0]
    }
    handleClickRight = () => {
        let position = this.state.num +1
        if(position <= this.props.imgs.length -1){
            this.setState({num:position, img: this.props.imgs[position]})
        }
    }
    handleClickLeft = () => {
        let position = this.state.num -1
        if(position >= 0){
            this.setState({num:position, img: this.props.imgs[position]})
        }

    }
render(){
    return( 
    <div style={{
        display:"flex",
        alignItems:"center",
    }}>
    <button onClick={this.handleClickLeft}>Left</button>
    <img style={{width:"300px", height:"300px"}} alt="" src={this.state.img} />
    <button onClick={this.handleClickRight}>Rigth</button>
    </div>
    )
}
}

export default Carousel;