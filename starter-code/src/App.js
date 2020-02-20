import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import {users} from './users'
class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <h1 className="title">IdCard</h1>
              <div className="columns is-desktop is-multiline">
                {/* TODO: Use the IdCard component */}
                {users.map( (user,i)=>{
                  console.log(user)
                  return <IdCard
                    key={"user-"+i} 
                    firstName={user.firstName}
                    lastName={user.lastName}
                    gender={user.gender}
                    height={user.height}
                    birth={user.birth}
                    picture={user.picture}
                  />
                })  
                }
              </div>
       
            
            </div>

            <div className="column is-12">
            <h1 className="title">Greetings</h1>

              <Greetings lang="de" children="Ludwig"/>
            </div>
            <div className="column is-12">
              <Greetings  lang="fr" children="Bonjour François"/>
            </div>
            <div className="column is-12">
              <h1 className="title">Random</h1>
                <Random  min={1} max={3}/>
            </div>
            <div className="column is-12">
              <Random  min={1} max={100}/>
            </div>
        </section> 
        
       
      </div>
    );
  }
}

export default App;
