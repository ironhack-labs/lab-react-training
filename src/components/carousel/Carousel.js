import React, {Component} from 'react';

class Carousel extends Component {
    state={
        imgCount: this.props.imgs.length - 1,
        imgShow:0
    }

    clickOnBtnRight(){
        console.log(this.state.imgShow)
        if(this.state.imgShow === this.state.imgCount){
            this.setState({
                imgShow : 0
            })
        }
        else {
            this.setState({
                imgShow : this.state.imgShow + 1
            })
        }
    }

    clickOnBtnLeft(){
        console.log(this.state.imgShow)

        if(this.state.imgShow === 0){
            this.setState({
                imgShow : this.state.imgCount
            })
        }
        else{
            this.setState({
                imgShow : this.state.imgShow - 1
            })
        }
    }

    render(){
        return(
            <div>
                <span>
                    <button onClick={(e)=>this.clickOnBtnLeft(e)}>LEFT</button>
                    <button onClick={(e)=>this.clickOnBtnRight(e)}>RIGHT</button>
                </span>
                <hr/>
                <img width="300px" src={this.props.imgs[`${this.state.imgShow}`]} alt="gaddam" />
            </div>
        )
    }
}

export default Carousel;