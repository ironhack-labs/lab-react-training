import { useState } from "react";

export default function ClickablePicture({ img, imgClicked }) {
  const [isGlasses, setGlasses] = useState(false);

  return (
    <>
      {isGlasses ? (
        <img
          onClick={() => setGlasses(!isGlasses)}
          src={imgClicked}
          width={250}
          alt="img"
        />
      ) : (
        <img
          onClick={() => setGlasses(!isGlasses)}
          src={img}
          width={250}
          alt="img"
        />
      )}
    </>
  );
}
