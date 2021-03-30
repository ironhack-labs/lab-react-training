import React from 'react'
import '../assets/css/FaceBook.css'

const FaceBook = ({data}) => {

  const addProfile = () => {
    let profiles = []
    data.forEach(item => {
      console.log(item)
      profiles.push(
        <div className="profile__container">
            <div>
                <img src={item.img} alt="profile"></img>
            </div>
            <div>
                <h3>First name: {item.firstName}</h3> 
                <h3>Last name: {item.lastName}</h3> 
                <h3>Country: {item.country}</h3> 
                <h3>Type: {item.isStudent ? 'Student' : 'Teacher'}</h3> 
            </div>
        </div>
      )
    })
    return profiles
  }

  return (
    <div>
      {addProfile()}
    </div>
  )
}

export default FaceBook
