import React, { Component } from 'react'
import profiles from './../../data/berlin.json';
import './FaceBook.css'

export default class FaceBook extends Component {
    state = {
        country: ''
    }
    setCountry = (event) => {
        const Country = event.target.innerText;
        this.setState(() => ({country: Country}))
    }
    render() {
        let countryList = profiles.map((profile, index) => {
            return (
                <button type="button" onClick={(event) => this.setCountry(event)} className="border text-base font-medium m-1 text-black bg-white hover:bg-gray-100 px-4 py-2" key={index}>
                    {profile.country}
                </button>
            )
        })
        let profileList = profiles.map((profile, index) => {
            const bgColor = profile.country === this.state.country ? 'bg-blue-200' : 'bg-white'
            return (
                <div className={`shadow-lg ${bgColor} rounded-2xl w-64 dark:bg-gray-800 profileCard`} key={index}>
                    <img alt="profil" src={`https://source.unsplash.com/featured/?${profile.country},${(profile.isStudent) ? 'Student' : 'Teacher'}`} className="rounded-t-lg h-28 w-full mb-4"/>
                    <div className="flex flex-col items-center justify-center p-4 -mt-16">
                        <a href="#" className="block relative">
                            <img alt="profil" src={profile.img} className="mx-auto object-cover rounded-full h-20 w-20 "/>
                        </a>
                        <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
                            {profile.firstName} {profile.lastName}
                        </p>
                        <p className="text-gray-800 dark:text-white text-sm font-medium mt-2">
                            {(profile.isStudent) ? 'Student' : 'Teacher'}
                        </p>
                        <p className="text-gray-400 text-xs">
                            {profile.country}
                        </p>
                        <div className="flex items-center justify-between gap-4 w-full mt-8">
                            <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                See profile
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
        return (  
            <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden" key>
                <div className="container mx-auto px-6 flex relative py-16">
                    <div className="sm:w-2/3 lg:w-full flex flex-col relative z-20">
                        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-3">
                        </span>
                        <h1 className="font-bebas-neue uppercase mb-4 text-2xl sm:text-1xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            FaceBook
                        </h1>
                        
                            <div className="flex flex-column flex-wrap content-start">
                            {countryList}
                            </div>
                            <div className='profiles'>
                            {profileList}
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
