import React, {Component} from 'react'
import '../facebook/FaceBook.css'


class CardProfile extends Component {

  render(){
    const {profile} = this.props;
    let occupation = undefined
    profile.isStudent ? occupation = "Student" : occupation = "Teacher"
    return(
      <div className="faceBook" key={profile.firstName} >
        <div className="profile.img">
          <img className="photo-fb" alt="Profile img" src={profile.img} />
        </div>
        <div className="user-data">
          <p><strong>firstName=</strong>{profile.firstName}</p>
          <p><strong>lastName=</strong>{profile.lastName}</p>
          <p><strong>country=</strong>{profile.country}</p>
          <p><strong>isStudent=</strong>{occupation}</p> 
        </div>    
      </div>
    )
  }
}

export default CardProfile