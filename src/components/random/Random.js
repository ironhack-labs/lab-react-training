import React from 'react'
import {Container, Table} from 'react-bootstrap'


class Random extends React.Component {
    render() {
        let randomNumber = Math.floor(Math.random() * (+this.props.max - +this.props.min)) + +this.props.min
        return (
            <Container>
                             <div>
                                 <h3>Random Number between two numbers {this.props.min} and {this.props.max}</h3>
                                 <Table>
                                     <tr>
                                         <td>
                                            <h2 min={this.props.min} max={this.props.max}>
                                               {randomNumber}
                                                </h2>
                
                                        </td>
                                    </tr>
                                </Table>
                               
                            </div>
                            </Container>
        
        )

    }
}

export default Random