import React from 'react'

class Carousel extends React.Component{

    state = {
        img: 0,
    }

    previous(){
        if (this.state.img === 0){
            this.setState({...this.state, img: 3})
        } else {
            this.setState({...this.state, img: this.state.img-1})
        }
    }

    next(){
        if (this.state.img === 3){
            this.setState({...this.state, img: 0})
        } else {
            this.setState({...this.state, img: this.state.img+1})
        }
    }

    render(){
        const style = {width: '300px', margin: '10px'}
        return(
            <div className="carousel">
                <button onClick={()=>this.previous()}>Previous</button>
                <img style={style} src={this.props.imgs[this.state.img]} alt={this.props.imgs[this.state.img]}/>
                <button onClick={()=>this.next()}>Next</button>
            </div>
        )
    }
}

export default Carousel
