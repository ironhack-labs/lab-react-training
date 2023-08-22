function ProfileImage(props) {
    return (
        <div className="profileImage">
          <img src={props.image} className="profile" alt="profile"/>
        </div>
    )
}

export default ProfileImage;