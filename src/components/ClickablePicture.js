import { useState } from "react";

const ClickablePicture = ({ img, imgClicked }) => {

    const [glasses, setGlasses] = useState(true);

    const toggleImage = () => setGlasses(!glasses);

    const withoutGlasses = <img onClick={toggleImage} src={img} alt="Portrait without glasses" style={{ width: "200px" }} />

    const withGlasses = <img onClick={toggleImage} src={imgClicked} alt="Portrait with glasses" style={{ width: "200px" }} />


    return (

        <section>
            {glasses ? withoutGlasses : withGlasses}
        </section>
    )
}
export default ClickablePicture