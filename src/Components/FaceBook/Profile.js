import './Profile.css'
export default function Profile({data, clickedCountry}) {
    console.log(clickedCountry)

    const {firstName, lastName, country, img, isStudent} = data
    let position = isStudent ? "Student": "Teacher"
    let isHighlighted = clickedCountry === country ? true : false
    console.log(clickedCountry, isHighlighted)
    let backgroundColor = isHighlighted ? {backgroundColor:"red"} : {backgroundColor: "white"}

    return(
        <div style={backgroundColor} className="profile__container--body">
            <img src={img} className='profile__photo' alt="profile photo"/>
            <div className='profile__container--text'>
                <p className='profile__text--firstName'><strong>First name</strong>:{firstName}</p>
                <p><strong>Last name</strong>:{lastName}</p>
                <p><strong>Country</strong>:{country}</p>
                <p><strong>Type</strong>:{position}</p>
            </div>
        </div>     
    )
}