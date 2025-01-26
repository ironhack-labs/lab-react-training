import './ProfilePic.css'

function ProfileImage (props){
    return (

        <div className='imgDiv'>
            <img src={props.image} alt="profile image" />

        </div>
    )
}

export default ProfileImage;