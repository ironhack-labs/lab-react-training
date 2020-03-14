import React from 'react'
import {Container, Table} from 'react-bootstrap'

class Greetings extends React.Component {
    render() {
        let eachLang = '';
        let phrase = '';
        if(this.props.lang === 'sp') {
            eachLang = this.props.lang;
            phrase = 'Hola mi amigo'
        }
        if(this.props.lang === 'fr') {
            eachLang = this.props.lang;
            phrase = 'Bonjour mon ami'
        }
        if(this.props.lang === 'en') {
            eachLang = this.props.lang;
            phrase = 'Hello my friend'
        }
        
        return (<Container>
                         <div>
                             <h3>Greetings!!</h3>
                             <Table>
                                 <tr>
                                     <td>
                                        <h2 lang={eachLang}>
                                           {phrase}
                                            </h2>
            
                                    </td>
                                </tr>
                            </Table>
                           
                        </div>
                        </Container>)
    }
}

export default Greetings