import React from 'react'
import profiles from '../data/berlin.json';

class FaceBook extends React.Component{

    getStudent(isStudent){
        if (isStudent){
            return <div><strong>Type:</strong> Student</div>
        } else {
            return <div><strong>Type:</strong> Teacher</div>
        }
    }

    getCards(){
        const cardsArray = profiles.map((card)=>{
            const {firstName, lastName, country, img, isStudent} = card
            return (
            <div className="card">
                <div><img src={img} alt={'card'+firstName}/></div>
                <div className="card-col">
                    <div><strong>First name:</strong> {firstName}</div>
                    <div><strong>Last name:</strong> {lastName}</div>
                    <div><strong>Country:</strong> {country}</div>
                    {this.getStudent(isStudent)}
                </div>
            </div>
            )
        })
        return cardsArray
    }

    render(){
        return(
            <div className="cardsContainer">
                {this.getCards()}
            </div>
        )
    }
}

export default FaceBook
