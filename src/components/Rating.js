import React from 'react'

class Rating extends React.Component{

    render(){
        const rating = {
            0: `☆☆☆☆☆`,
            1: `★☆☆☆☆`,
            2: `★★☆☆☆`,
            3: `★★★☆☆`,
            4: `★★★★☆`,
            5: `★★★★★`,
        }
        
        const {children} = this.props
        return(
            <div className="rating">
                {rating[Math.round(children)]}
            </div>
        )
    }
}

export default Rating