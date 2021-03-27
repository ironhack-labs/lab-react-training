import React, { Component } from 'react'
import GreetItem from './GreetItem'
import './Greetings.scss'
import { langs } from '../../assets/data'

class Greetings extends Component {
    constructor(props) {
        super(props)
        this.state = { lang: 'Select your language' }
    }

    onLang = (e) => {
        let l = e.target.id
        this.setState({
            lang: langs[`${l}`]
        })
    }
    
    render() {
        const langArr = Object.keys(langs)

        return (
            <div className="Greetings">
            <div className="all-btns">
                {langArr.map(l => {
                    return <button onClick={this.onLang} id={l} key={l}> {l} </button>
                })}
            </div>

            <GreetItem text={this.state.lang}/>

            </div>
        )
    }
}

export default Greetings
