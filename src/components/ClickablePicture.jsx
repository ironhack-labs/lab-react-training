import { useState } from "react";

function ClickablePicture({ img, imgClicked }) {
  const [profilePic, setProfilePic] = useState();
  const handleImageClick = () => {
    if (profilePic == img) {
      setProfilePic(imgClicked);
    } else {
      setProfilePic(img);
    }
  };
  return (
    <div>
      <img src={profilePic} onClick={handleImageClick} />
    </div>
  );
}

export default ClickablePicture;