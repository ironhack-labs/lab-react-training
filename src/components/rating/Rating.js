import React, {useState} from 'react';
import {FaStar} from "react-icons/fa";
import '../../App.css';

// ITERATION6 CON HOOKS
const Rating = () => {
    const {rating, setRating} = useState(0);
    
    return(
        <div className='containerI6H'>
            {[...Array(5)].map((item,index) => {
                const givenRating = index +1;
                return (
                    <label>
                        <div 
                            className="radioH"
                            type="radio"
                            value={givenRating}
                            onclick={() => {
                                setRating(givenRating);
                                alert(`Are you sure you want to give ${givenRating} stars? `);
                            }}
                        />
                        <div className='ratingH'>
                            <FaStar
                                color={
                                    givenRating < rating || givenRating === rating
                                        ? "000"
                                        :"rgb(192,192,192)"
                                }
                            />
                        </div>
                    </label>
                );
            })}
        </div>
    );
}
  

// class Rating extends React.Component {
//     constructor(props) {
//         super(props);
//         this.num = Math.round(props.children)
//         this.stars = '★'.repeat(this.number) + '☆'.repeat( 5 - this.number )
//     }
    
//     render(){
//         return (
//             <div 
//                 className ='rating'>
//                 {this.stars}
//             </div>
//         )
//     }
// }

export default Rating;