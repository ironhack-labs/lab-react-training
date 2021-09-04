import React from "react";
import "./Rating.css";


export default class Rating extends React.Component {

    render() {

        const rating = Math.round(this.props.children)

        return (
        <div className="Rating">
            {new Array(5).fill().map((_, index) => {                
                if(index < rating){
                    return <span>&#9733;</span>
                }
                return <span>&#9734;</span>
            })}
        </div>
        );
    }
}