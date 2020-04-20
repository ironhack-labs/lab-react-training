import React, { Component } from 'react';

class Rating extends Component {

    render(){
        const { children} = this.props;
            let numRounded = Math.round(children);
            let star = "";
            if(numRounded == 0) {
                star = <p>☆☆☆☆☆</p>
            }
            else if (numRounded == 1){
                star = <p>★☆☆☆☆</p>
            }
            else if (numRounded == 2){
                star = <p>★★☆☆☆</p>
            }
            else if (numRounded == 3){
                star = <p>★★★☆☆</p>
            }
            else if (numRounded == 4){
                star = <p>★★★★☆</p>
            }
            else{
                star = <p>★★★★★</p>
            }

        return(
            <div>
                {star}
            </div>

        )
    }


}

export default Rating;