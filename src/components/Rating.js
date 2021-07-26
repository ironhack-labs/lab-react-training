import { Component } from 'react';
import '../App.css';


class Rating extends Component {
    render() {
        const blackStar = '★'; 
        const borderStar = '☆';
        if (this.props.children >= 0 && this.props.children <= 0.49) {
            return (
                <div className='rating'>
                    {borderStar}
                    {borderStar}
                    {borderStar}
                    {borderStar}
                    {borderStar}
                </div>
            )
        } else if (this.props.children >= 0.5 && this.props.children <= 1.49) {
            return (
                <div className='rating'>
                    {blackStar}
                    {borderStar}
                    {borderStar}
                    {borderStar}
                    {borderStar}
                </div>
            )
        } else if (this.props.children >= 1.5 && this.props.children <= 2.49) {
            return (
                <div className='rating'>
                    {blackStar}
                    {blackStar}
                    {borderStar}
                    {borderStar}
                    {borderStar}
                </div>
            )
        } else if (this.props.children >= 2.5 && this.props.children <= 3.49) {
            return (
                <div className='rating'>
                    {blackStar}
                    {blackStar}
                    {blackStar}
                    {borderStar}
                    {borderStar}
                </div>
            )
        } else if (this.props.children >= 3.5 && this.props.children <= 4.49) {
            return (
                <div className='rating'>
                    {blackStar}
                    {blackStar}
                    {blackStar}
                    {blackStar}
                    {borderStar}
                </div>
            )
        } else if (this.props.children >= 4.5 && this.props.children <= 5) {
            return (
                <div className='rating'>
                    {blackStar}
                    {blackStar}
                    {blackStar}
                    {blackStar}
                    {blackStar}
                </div>
            )
        }
    }
}

export default Rating;