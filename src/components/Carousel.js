import React from 'react'

class Carousel extends React.Component {
    state = {
        image: this.props.imgs[0]
    }

    clickHandler = () => {

        if(this.state.image === this.props.imgs[this.props.imgs.length-1])
        {console.log('what is max',this.state )
        this.setState(state => ({
            image: this.props.imgs[0]
        }))
    
        } else {
            for (let i = 0 ; i < this.props.imgs.length -1; i++ ){
                if(this.state.image === this.props.imgs[i])
                this.setState(state => ({
                    image: this.props.imgs[i+1]
                }))   
            }
        }
    }

    clickHandler2 = () => {

        if(this.state.image === this.props.imgs[0])
        {console.log('what is max',this.state )
        this.setState(state => ({
            image: this.props.imgs[this.props.imgs.length-1]
        }))
    
        } else {
            for (let i = this.props.imgs.length -1; i > 0; i-- ){

                if(this.state.image === this.props.imgs[i])
                this.setState(state => ({
                    image: this.props.imgs[i-1]
                }))   
            }
        }
    }

    render() {
        console.log('what is this', this.props.imgs);

        return (

          <>
            
            <div>
            <button onClick={this.clickHandler}>
                go Left
            </button>
            <img src={this.state.image} alt="Dice"/> 
            <button onClick={this.clickHandler2}>
                go Right
            </button>
            </div>
          </>
        );
    }

}

export default Carousel;