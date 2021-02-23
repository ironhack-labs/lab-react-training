import React from 'react'
import profiles from '../data/berlin.json';

let countries = profiles.map((profile)=> profile.country);

export default function FaceBook() {

    let [profile] = React.useState(profiles);
    let [showInfo, setInfo] = React.useState("none");
    let [buttons] = React.useState(countries);
    let [showByCountry, setCountry] = React.useState("All");
    let buttonsArr = ["All", ...buttons];

    let clickedImage = () => {
        if(showInfo === "none") {
            setInfo("block")
        } else {
            setInfo("none")
        }
    }

    let clickedCountry = (country) => {
        setCountry(country)
    }
    
    return (
        <div>
            { buttonsArr.map((button) => (
                <button onClick={() => clickedCountry(button)}>{button}</button>
                ))
            }
            { profile.map((contact) => (
                <article  style={{backgroundColor: contact.country === showByCountry ? "blue" : ""}}>
                    <div>
                        <img onClick={clickedImage} src={contact.img} alt="profile" />
                    </div>
                    <div style={{display:showInfo}}>
                        <p>
                            <span>First Name:</span> {contact.firstName}{" "}
                        </p>
                        <p>
                            <span>Last Name:</span> {contact.lastName}
                        </p>
                        <p>
                            <span>Country:</span> {contact.country}
                        </p>
                        <p>
                            <span>Type:</span> {contact.isStudent ? "Student" : "Teacher"}
                        </p>
                    </div>
                </article>
                ))
            }
        </div>
    )
}
