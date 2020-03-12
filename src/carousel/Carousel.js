
import React, { Component } from 'react'
import './Carousel.css'


export default class Carousel extends Component {
    constructor(props){
        super(props)
        const {students} = props
        this.students= students
        this.state = {
            index: 0,
        }
        this.image = students[this.state.index].img
    }
  
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    prevOrNext =(e)=> {
        const { id } = e.target
        const { index } = this.state

        this.setState({
            index: id === 'prev' && index > 0 ? index - 1 
                    : id === 'next' && index < this.students.length -1 ? index + 1 
                    : index ,
        })
        console.log("indexOfImg", index)
        this.image = this.students[index].img
    }
   
    //=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    render() {
        // const {}= this.state
        return (
            <div className='container'>
                <h2>Iteration 11: State: Carousel</h2>
                <hr/>
                <div>
                    <button id='prev' onClick={(e)=>this.prevOrNext(e)}>prev</button>
                    <img src={this.image} alt={this.image}/>
                    <button id='next' onClick={(e)=>this.prevOrNext(e)}>next</button>
                </div>
            </div>
        )
    }
}
