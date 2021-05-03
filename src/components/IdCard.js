import React from 'react'

class IdCard extends React.Component{
    render(){
        const {lastName, firstName, gender, height, birth, picture} = this.props;
        return(
            <div>
                <div className="card">
                    <img src={picture} alt={picture}/>
                    <div className="card-data">
                        <p>First name: {firstName}</p>
                        <p>Last name: {lastName}</p>
                        <p>Gender: {gender}</p>
                        <p>Height: {height/100}</p>
                        <p>Birth: {birth.toDateString()}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default IdCard
