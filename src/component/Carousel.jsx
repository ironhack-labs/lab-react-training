import { Component } from "react";

 class Carousel extends Component {
     state = {
         imgNumber: 0
     }

     changeSlide = (amount) => {
         this.setState((state, props) => {
             let number = state.imgNumber;
             if (amount < 0) {
                 if (state.imgNumber === 0) number = props.imgs.length - 1;
                 if (state.imgNumber !== 0) number = state.imgNumber + amount;
             } 
             else if (state.imgNumber < props.imgs.length - 1) number = state.imgNumber + amount;
             else if (state.imgNumber >= props.imgs.length - 1) number = 0;

             return {
                 imgNumber: number
             }
         })
     }
     
     render() {
         const { imgNumber } = this.state;
         const { imgs } = this.props;
         return (
            <div>
                <div className="carousel-item active">
                    <img src={imgs[imgNumber]}/>
                 </div>
                <button onClick={() => this.changeSlide(-1)} type="button">
                    <span>Previous</span>
                </button>
                <button onClick={() => this.changeSlide(1)} type="button">
                    <span>Next</span>
                </button>
             </div>
         );
     }
 }

 export default Carousel;