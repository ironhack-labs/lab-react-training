import React from 'react'
import styled from 'styled-components'
import profiles from '../data/berlin.json'

class Facebook extends React.Component{



    render(){
        const FaceBox = styled.div`
            border: 1px solid black;
            display: flex;
            margin: 10px;
        `
        const ProfPic = styled.img`
            width: 150px;
            margin: 10px;
        `

        const profilesList = []

        profiles.forEach(profile=>{
            profilesList.push(
                <FaceBox>
                    <ProfPic src={profile.img} alt={profile.firstName} />
                    <div>
                        <p><b>First name:</b> {profile.firstName}</p>
                        <p><b>Last name:</b> {profile.lastName}</p>
                        <p><b>Country:</b> {profile.country}</p>
                        <p><b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}</p>
                    </div>
                </FaceBox>)
        })



        return (
            <div>
                <button onClick={()=>{this.changeBackground('England')}}>England</button>
                <button onClick={()=>{this.changeBackground('USA')}}>USA</button>
                <button onClick={()=>{this.changeBackground('Malaysia')}}>Malaysia</button>
                <button onClick={()=>{this.changeBackground('Germany')}}>Germany</button>
                <button onClick={()=>{this.changeBackground('Sweden')}}>Sweden</button>
                <button onClick={()=>{this.changeBackground('Nigeria')}}>Nigeria</button>
                <button onClick={()=>{this.changeBackground('Italy')}}>Italy</button>
                <button onClick={()=>{this.changeBackground('Scotland')}}>Scotland</button>
                <button onClick={()=>{this.changeBackground('Kazakhstan')}}>Kazakhstan</button>
                <button onClick={()=>{this.changeBackground('Russia')}}>Russia</button>
                <button onClick={()=>{this.changeBackground('Catalonia')}}>Catalonia</button>
                <button onClick={()=>{this.changeBackground('France')}}>France</button>
                <button onClick={()=>{this.changeBackground('Israel')}}>Israel</button>
                <button onClick={()=>{this.changeBackground('Brazil')}}>Brazil</button>
                <button onClick={()=>{this.changeBackground('Taiwan')}}>Taiwan</button>
                <button onClick={()=>{this.changeBackground('Turkey')}}>Turkey</button>
                <button onClick={()=>{this.changeBackground('Norway')}}>Norway</button>
                {profilesList}
            </div>

        )
    }
}

export default Facebook