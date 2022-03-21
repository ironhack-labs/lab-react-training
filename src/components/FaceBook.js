//jshint esversion:8
import profilesData from '../data/berlin.json';
import { useState } from 'react';
import { SearchProfile } from './SearchProfile';

export const FaceBook = () => {

    const [profiles, setProfiles] = useState(profilesData);
   
    const countryList = [...new Set(profiles.map(person => person.country))];
    const countryListArr = countryList.map(item => {
        return {name: item, color: ""};
    });
    
    const [country, setCountry] = useState(countryListArr);

    
    const selectProfiles = (countryName) => {
        let faceProfiles;
        let btns;

        if(countryName === "All"){
            document.querySelector('.all').style.backgroundColor = 'lightblue';
            btns = country.map(element => {
                element.color = "";
                return element;
            });

            faceProfiles = profiles.map(element => {
                element.color = "lightblue";
                return element;
            });


        } else {
            document.querySelector('.all').style.backgroundColor = '';
            btns = country.map(element => {
                if (element.name === countryName){
                    element.color = "lightblue";
                    return element;
                } else {
                    element.color = "";
                    return element;
                }
            });

            faceProfiles = profiles.map(element => {
                if (element.country === countryName){
                    element.color = "lightblue";
                    return element;
                } else {
                    element.color = "";
                    return element;
                }
            });
        }
        
        setCountry(btns);
        setProfiles(faceProfiles);
    };

    const showProfileInfo = (personName) => {
         let filteredProfiles = profiles.map(person => {
            if (person.firstName !== personName) {
                person.showInfo = false;
                return person;
            } else {
                if(person.showInfo){
                    person.showInfo = false;
                    return person;
                }
                person.showInfo = true;
                return person;
            }
        }); 
        
        setProfiles(filteredProfiles);
    };

    
    let sortByCountry = () => {

        profiles.sort((a,b) => {

            if ( a.country.toLocaleLowerCase() < b.country.toLocaleLowerCase() ){

                return -1;
            }
            if ( a.country.toLocaleLowerCase() > b.country.toLocaleLowerCase() ){

                return 1;
            } 
            return 0;
        });

    setProfiles([...profiles]);
    };

    let sortByFirstName = () => {

        profiles.sort((a,b) => {

            if ( a.firstName.toLocaleLowerCase() < b.firstName.toLocaleLowerCase() ){

                return -1;
            }
            if ( a.firstName.toLocaleLowerCase() > b.firstName.toLocaleLowerCase() ){

                return 1;
            } 
            return 0;
        });

    setProfiles([...profiles]);
    };

    const handleFilterProfiles = str => {
        let filteredProfiles;
        str = str.toLocaleLowerCase();
        if (str === "") {
            filteredProfiles = [...profiles];
        } else {
            filteredProfiles = profiles.filter(item => {
                
                return item.firstName.toLocaleLowerCase().includes(str);
            });
        }
        setProfiles(filteredProfiles);
    };

    return(
        <div className='FaceBook containers'>
            <div className='listOfCountry'>

                <button onClick={() => selectProfiles("All")} className={'all'}>All</button>

                {country.map((country, index) => <button className={country.name} key={index.toString()} style={{backgroundColor: country.color}} onClick={() => selectProfiles(country.name)}>{country.name} </button>)} <br/>

                <button onClick={sortByCountry}>Sort by Country</button>
                <button onClick={sortByFirstName}>Sort by First Name</button>
                
                <SearchProfile filterProfiles={handleFilterProfiles}/>
                
            </div>
            {profiles.map((person, index) => {
                return(

                    <div className={`Id-card ${person.country}`} key={index.toString()} style={{backgroundColor: person.color}}>
                        <img src={person.img} onClick={() => showProfileInfo(person.firstName)} alt="Profile card" />
                        {person.showInfo && <div>
                            <span><b>First Name:</b> {person.firstName}</span> <br />
                            <span><b>Last Name:</b> {person.lastName}</span> <br />
                            <span><b>Country:</b> {person.country}</span> <br />
                            <span><b>Type:</b> {person.isStudent?"Student":"Teacher"}</span>
                        </div>}
                    </div>

                );
            })}

        </div>

    );
}