import { useState } from "react";
import profilesArray from '../../data/berlin.json';
import FaceBookCard from "../FaceBookCard/FaceBookCard";

function FaceBook() {
    const styles = {
        backgroundColor: 'blue',
        width: 'fit-content',
        color: 'white'
    }
    const [profiles, setProfiles] = useState(profilesArray)

    const englandProfiles = () => {
        const profilesCopy = [...profilesArray].map(elm => {
            if (elm.country === 'England') return { ...elm, color: true }
            else return elm
        })
        setProfiles(profilesCopy)
    }
    const USAProfiles = () => {
        const profilesCopy = [...profilesArray].map(elm => {
            if (elm.country === 'USA') return { ...elm, color: true }
            else return elm
        })
        setProfiles(profilesCopy)
    }
    const germanyProfiles = () => {
        const profilesCopy = [...profilesArray].map(elm => {
            if (elm.country === 'Germany') return { ...elm, color: true }
            else return elm
        })
        setProfiles(profilesCopy)
    }
    return (
        <div className="FaceBook">
            <button onClick={() => setProfiles(profilesArray)}>All</button>
            <button onClick={englandProfiles}>England</button>
            <button onClick={USAProfiles}>USA</button>
            <button onClick={germanyProfiles}>Germany</button>
            {
                profiles.map((elm, i) => {

                    return (
                        <div key={i} style={elm.color ? styles : undefined}>
                            <FaceBookCard info={elm} />

                        </div>
                    )
                })
            }


        </div>
    );
}
export default FaceBook;
