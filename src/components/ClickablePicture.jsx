import {useState} from 'react'

function ClickablePicture({ img, imgClicked }) {
    const [profilePic, setProfilePic] = useState(img);

    const handleImageChange = () => {
        if (profilePic === img ) {
            setProfilePic(imgClicked)
        }  else {
            setProfilePic(img);
    }
    };
    return (
        <div>
          <img src={profilePic} onClick={handleImageChange} />
        </div>
      );
    }
export default ClickablePicture;