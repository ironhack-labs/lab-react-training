import React, { Component } from 'react';
import profiles from '../data/berlin.json';

class FaceBook extends Component {

    state = {
        clicked: ''
    }

    setClicked(country) {


        let clicked = '';

        if(this.state.clicked === country) {
            clicked = '';
        } else {
            clicked = country;
        }

        return this.setState({
            clicked: clicked
        })

    }

    getCountries(allProfiles)  {

        const countries = allProfiles.map(obj => {
            return obj.country;
        });

        return countries.filter((item, index) => countries.indexOf(item) === index);

    }

    render() {

        const countriesList = this.getCountries(profiles);

        const countries = countriesList.map(element => {
            if (this.state.clicked === element) {
                return <button className='blueBack' onClick={e => this.setClicked(element)}>{element}</button>
            } else {
                return <button onClick={e => this.setClicked(element)}>{element}</button>
            }
        })

        const users = profiles.map(obj => {
            if (this.state.clicked === obj.country) {
                return (
                    <div className='cardCont blueBack'>
                        <img src={obj.img}/>
                        <p><strong>First name:</strong> {obj.firstName}</p>
                        <p><strong>Last name:</strong> {obj.lastName}</p>
                        <p><strong>Country:</strong> {obj.country}</p>
                        <p><strong>Type:</strong> {(obj.isStudent) ? 'Student' : 'Teacher'}</p>
                    </div>
                )
            } else {
                return (
                    <div className='cardCont'>
                        <img src={obj.img}/>
                        <p><strong>First name:</strong> {obj.firstName}</p>
                        <p><strong>Last name:</strong> {obj.lastName}</p>
                        <p><strong>Country:</strong> {obj.country}</p>
                        <p><strong>Type:</strong> {(obj.isStudent) ? 'Student' : 'Teacher'}</p>
                    </div>
                )
            }
        })

        return (
            <div className='facebookCont'>
                <div>
                    {countries}
                </div>
                {users}
            </div>
        )

    }

}

export default FaceBook;