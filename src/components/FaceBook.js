import React from 'react';
import profiles from './../data/berlin.json';

const styles ={
    border :"1px solid black",
    padding: 10,
    margin: 10
}
const sButton = {
    display: "inline-block"
}
function FaceBook(){
//const [profile, setProfiles] = React.useState(profiles)
    return (
        <div>
        {countriesSearch()}
        <div style={{display: "flex",flexWrap: "wrap",justifyContent: "center",
        alignItems: "center"}}>
            {listProfiles()}
        </div>
        </div>
    )
    
}

function listProfiles(){

console.log("PERFILES: ",profiles)
    return profiles.map((n, idx)=> (
<div style={styles} key={idx}>
    <img alt={n.firstName} src={n.img} style={{width: 100, display: "inline-block", padding: 10}}/>
    <p style={{display: "inline-block",textAlign: "left", verticalAlign:"top"}}>
        <b>First name</b>: {n.firstName}<br/>
        <b>Last name</b>: {n.lastName}<br/>
        <b>Country</b>: {n.country}<br/>
        <b>Type</b>: {n.isStudent ? "Student" : "Teacher"}
    </p>
</div>
    ))
}

function countriesSearch(){
    return profiles.map((c) =>(
        <div style={sButton}>
        <button type="button" onClick={{
            
        }}>{c.country}</button>
        </div>
    ))
}


export default FaceBook