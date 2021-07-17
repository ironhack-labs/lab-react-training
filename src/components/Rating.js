import { Component } from 'react';
import '../App.css';


class Rating extends Component {
    render() {
        if (this.props.children >= 0 && this.props.children <= 0.49) {
            return (
                <div className='rating'>
                    <img src='/img/star_border.png' className='star'/> 
                    <img src='/img/star_border.png' className='star'/>
                    <img src='/img/star_border.png' className='star'/>
                    <img src='/img/star_border.png' className='star'/>
                    <img src='/img/star_border.png' className='star'/>
                </div>
            )
        } else if (this.props.children >= 0.5 && this.props.children <= 1.49) {
            return (
                <div className='rating'>
                    <img src='/img/star_black.png' className='star'/>
                    <img src='/img/star_border.png' className='star'/>
                    <img src='/img/star_border.png' className='star'/>
                    <img src='/img/star_border.png' className='star'/>
                    <img src='/img/star_border.png' className='star'/>
                </div>
            )
        } else if (this.props.children >= 1.5 && this.props.children <= 2.49) {
            return (
                <div className='rating'>
                    <img src='/img/star_black.png' className='star'/>
                    <img src='/img/star_black.png' className='star'/>
                    <img src='/img/star_border.png' className='star'/>
                    <img src='/img/star_border.png' className='star'/>
                    <img src='/img/star_border.png' className='star'/>
                </div>
            )
        } else if (this.props.children >= 2.5 && this.props.children <= 3.49) {
            return (
                <div className='rating'>
                    <img src='/img/star_black.png' className='star'/>
                    <img src='/img/star_black.png' className='star'/>
                    <img src='/img/star_black.png' className='star'/>
                    <img src='/img/star_border.png' className='star'/>
                    <img src='/img/star_border.png' className='star'/>
                </div>
            )
        } else if (this.props.children >= 3.5 && this.props.children <= 4.49) {
            return (
                <div className='rating'>
                    <img src='/img/star_black.png' className='star'/>
                    <img src='/img/star_black.png' className='star'/>
                    <img src='/img/star_black.png' className='star'/>
                    <img src='/img/star_black.png' className='star'/>
                    <img src='/img/star_border.png' className='star'/>
                </div>
            )
        } else if (this.props.children >= 4.5 && this.props.children <= 5) {
            return (
                <div className='rating'>
                    <img src='/img/star_black.png' className='star'/>
                    <img src='/img/star_black.png' className='star'/>
                    <img src='/img/star_black.png' className='star'/>
                    <img src='/img/star_black.png' className='star'/>
                    <img src='/img/star_black.png' className='star'/>
                </div>
            )
        }
    }
}

export default Rating;