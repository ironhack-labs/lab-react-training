import profiles from '../data/berlin.json';
import { useState } from "react";

function FaceBook () {
    const [country, setcountry] = useState('Brazil');
    const verifyType = (estudante) => {
        let type = '';
        if(estudante){
            type = 'Student'
        } else {
            type = 'Teacher'
        }
        return type;
    }
    const All = () => {
        setcountry('All');
    }
    const Brazil = () => {
        setcountry('Brazil');
    }
    const England = () => {
        setcountry('England');
    }
    const USA = () => {
        setcountry('USA');
    }
    const Malaysia = () => {
        setcountry('Malaysia');
    }
    const Germany = () => {
        setcountry('Germany');
    }
    const Sweden = () => {
        setcountry('Sweden');
    }
    const Nigeria = () => {
        setcountry('Nigeria');
    }
    const Italy = () => {
        setcountry('Italy');
    }
    const Scotland = () => {
        setcountry('Scotland');
    }
    const Kazakhstan = () => {
        setcountry('Kazakhstan');
    }
    const Russia = () => {
        setcountry('Russia');
    }
    const Catalonia = () => {
        setcountry('Catalonia');
    }
    const France = () => {
        setcountry('France');
    }
    const Israel = () => {
        setcountry('Israel');
    }
    const Taiwan = () => {
        setcountry('Taiwan');
    }
    const Turkey = () => {
        setcountry('Turkey');
    }
    const Norway = () => {
        setcountry('Norway');
    }
    let fundo = ''

    return (
        <div>
        <button onClick={All}>All </button>
        <button onClick={Brazil}>Brazil </button>
        <button onClick={England}>England </button>
        <button onClick={Malaysia}>Malaysia </button>
        <button onClick={Germany}>Germany </button>
        <button onClick={Sweden}>Sweden </button>
        <button onClick={Nigeria}>Nigeria </button>
        <button onClick={Italy}>Italy </button>
        <button onClick={Kazakhstan}>Kazakhstan </button>
        <button onClick={Scotland}>Scotland </button>
        <button onClick={Russia}>Russia </button>
        <button onClick={Catalonia}>Catalonia </button>
        <button onClick={France}>France </button>
        <button onClick={Israel}>Israel </button>
        <button onClick={Taiwan}>Taiwan </button>
        <button onClick={Turkey}>Turkey </button>
        <button onClick={Norway}>Norway </button>

            {profiles.map(profile => {
                
                if(profile.country === country){
                    fundo = '#2669a8';
                }
                else if(country === 'All'){
                    fundo = '#2669a8';
                }
                else{
                    fundo = 'white'
                }
                return (
                    <div style={{background:fundo}} key={profile.img} className='IdCard'>
                        <div className="cardPicture">
                            <img src={profile.img} alt='profile' style={{width:100, height:100}}/>
                        </div>
                        <div className="cardInfo">
                            <p>First name: {profile.firstName}<br></br>
                            Last name: {profile.lastName}<br></br>
                            Country: {profile.country}<br></br>
                            Type: {verifyType(profile.estudante)}</p><br></br>
                        </div>
                    </div>  
                )
            })}

        </div>
    );
};

export default FaceBook;