import React, {Component} from 'react';
import './Rating.css'

class Rating extends Component {
    starRound(number) {
        let rounded = Math.round(number)
        return rounded;
    }

    starsSelect(numb){
        let star0 = <img src ="img/stars/0.png" />;
        let star1 = <img src ="img/stars/1.png" />;
        switch(numb) {
            case 0:
              return star0
              break;
            default:
              return [...Array(numb)].map((e, i) => <img alt= "img" src ="img/stars/1.png" key={i} />)
        }
    }

    render(){
        return(
            <div className="rating">
                {this.starsSelect(this.starRound(this.props.children))}
            </div>
        )
    }
}

export default Rating;
