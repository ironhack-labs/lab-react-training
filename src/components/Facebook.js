import React from 'react'
import profiles from '../data/berlin.json'
import FacebookCard from './FacbookCard'
import FaceBookBtns from './FacebookBtns'

class Facebook extends React.Component {
    state = {
        profiles: profiles,
        filteredProfiles: profiles,
        countries: [],
    }

    handleCountry = (country) => {
        let clonedArr = [...this.state.profiles]
        clonedArr.map((elem) => {
            if (elem.country === country) {
                elem.filtered = true
            } else {
                elem.filtered = false
            }
        })

        this.setState({
            profiles: clonedArr
        })
    }

    showAll = () => {
        let clonedArr = [...this.state.profiles]
        clonedArr.map((elem) => {
            elem.filtered = false 
        })

        this.setState({
            profiles: clonedArr,
            countries: []
        })
    }

    handleSearch = (e) => {
        let search = e.currentTarget.value
        let profilesClone = this.state.profiles.filter((item) => {
            return item.firstName.toLowerCase().startsWith(search.toLowerCase())
        })

        this.setState({
            filteredProfiles: profilesClone
        })
    }

    render() {
    return (
        <div>
            <button onClick={this.showAll}>All</button> 
            {this.state.profiles.map((elem, i) => {
                if (!this.state.countries.includes(elem.country)) { 
                    this.state.countries.push(elem.country)
                    return <FaceBookBtns 
                        profile={elem}
                        key={i}
                        onCountry={this.handleCountry}
                        /> 
                }
            })}
            <input type="text" placeholder="Search" onChange={this.handleSearch}></input>
            <ul className="fb-list">
                {
                    this.state.filteredProfiles.map((elem, i) => {
                        return <FacebookCard 
                                profile={elem}
                                key={i}    
                                />
                    })
                }
            </ul>
        </div>
    )
    }
}

export default Facebook;
