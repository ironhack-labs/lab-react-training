import React from 'react';

class Rating extends React.Component {
    render(){
        let star = '★'.repeat(Math.round(this.props.children)) + '☆'.repeat(5-Math.round(this.props.children))
        return(
            <div>
                {star}
            </div>
        )
    }
}

export default Rating