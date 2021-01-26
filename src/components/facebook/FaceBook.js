import React, { Component } from 'react'
import profiles from '../../data/berlin.json'
import '../idcard/IdCard.css'

export class FaceBook extends Component {

    state = {
        profiles
    }   

    render() {

        const profile = profiles.map(item => {
            return(
                <div>
                    <div className='IdCard box'>
                        <img src={item.img} alt={item.firstName}/>
                    
                    <div className='right'>
                        <p><strong>First name: </strong>{item.firstName}</p>
                        <p><strong>Last name: </strong>{item.lastName}</p>
                        <p><strong>Country: </strong>{item.country}</p>
                        <p><strong>Type: </strong>{item.isStudent ? 'Student' : 'Teacher'}</p>
                    </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {profile}
            </div>
        )
    }
}

export default FaceBook
