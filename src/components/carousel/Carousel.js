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
            <div className="carousel container slide my-5">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgs[imgNumber]} className="d-block w-100" />
                    </div>
                </div>
                <button onClick={() => this.changeSlide(-1)} className="carousel-control-prev" type="button">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button onClick={() => this.changeSlide(1)} className="carousel-control-next" type="button">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

export default Carousel;