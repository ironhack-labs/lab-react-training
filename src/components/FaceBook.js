import { useState } from 'react';
import profiles from './../data/berlin.json';

const countries = profiles.map((profile) => {
    return profile.country
})
const uniqueCountries = countries.filter((value, index, array) => array.indexOf(value) === index);

function FaceBook() {

    const [prof, setProf] = useState(profiles)
    const [filterProfiles, setFilteredProfiles] = useState(profiles)


    const [countryDisplay, setCountryDisplay] = useState('')
    function handleBackColor(event) {
        const countrySelected = event.target.innerText
        setCountryDisplay(countrySelected)

    }
    function background(country) {

        if (country === countryDisplay) {
            return 'lightBlue'
        }
    }


    // BONUS DISPLAY MORE INFO BONUS
    const [userSelected, setSelectedUser] = useState('')
    function handleUserSelected(img) {
        if (img === userSelected) {
            return "100%"
        } else {
            return "0%"
        }
    }
    function handleDisplay(event) {
        setSelectedUser(event.target.src)
    }



    // SORT ALFABETICLY FUNCTION 
    const [dataSorted, setSorting] = useState(false)

    function sortingNames(myArray, desc) {
        if (desc) {
            myArray.sort(function (a, b) {
                if (a.firstName < b.firstName) {
                    return -1;
                }
                if (a.firstName > b.firstName) {
                    return 1;
                }
                return 0;
            });

        } else {
            myArray.sort(function (a, b) {
                if (a.firstName < b.firstName) {
                    return 1;
                }
                if (a.firstName > b.firstName) {
                    return -1;
                }
                return 0;
            });
        }
    }

    function handleNameSorting(array) {
        let desc = false
        if (!dataSorted) {
            desc = true
            sortingNames(array, desc)
            setSorting(true)
        } else {
            desc = false
            sortingNames(array, desc)
            setSorting(false)
        }
    }

    // SEARCH BAR 
    const [userName, setUserName] = useState('')

    function handleTextInput(event) {
        setUserName(event.target.value)
    
        // to avoid delay use directy the event.target.value
        setFilteredProfiles(prof.filter(profile => {
            return profile.firstName.toLowerCase().startsWith(event.target.value.toLowerCase())
        }))

        

    }


    return (
        <div>
            <div>
                {uniqueCountries.map(country => {
                    return (
                        <button onClick={handleBackColor} style={{ backgroundColor: background(country) }} key={Date.now() + Math.random()}>{country}</button>
                    )
                })}

            </div>

            <div>
                <button onClick={() => handleNameSorting(profiles)}>Sort by Name</button>
            </div>

            <div>
                <label htmlFor='search'>Search By Name</label>
                <input onChange={handleTextInput} id="search" type="text" value={userName} />
            </div>

            {filterProfiles.map(({ firstName, lastName, country, img, isStudent }) => {
                return (

                    <div style={{ display: "flex", border: '2px black solid', backgroundColor: background(country) }} key={Date.now() + Math.random() * 1000}>
                        <div>
                            <img onClick={handleDisplay} style={{ width: "200px" }} src={img} alt="im" />

                        </div>
                        <div style={{ opacity: handleUserSelected(img), width: "100%" }}>
                            <p><b>First Name:</b>{firstName}</p>
                            <p><b>Last Name:</b>{lastName}</p>
                            <p><b>Country:</b>{country}</p>
                            <p><b>Type:</b>{isStudent ? 'Student' : 'Teacher'}</p>
                        </div>


                    </div>
                )
            })}
        </div>
    )
}

export default FaceBook;