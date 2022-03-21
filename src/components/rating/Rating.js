import React from 'react';
import './Rating.css';

class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.num = Math.round(props.children)
        this.stars = '★'.repeat(this.number) + '☆'.repeat( 5 - this.number )
    }
    
    render(){
        return (
            <div 
                className ='rating'>
                {this.stars}
            </div>
        )
    }
}

export default Rating;