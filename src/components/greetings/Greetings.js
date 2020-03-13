import React from 'react'
import {Container, Table} from 'react-bootstrap'

const Greetings = (props) => {
    return (
        <Container>
            <div className={props.lang}>
                <h3>Greetings!!</h3>
                <Table>
                    <tr>
                        <td>
                            <h2>
                                {props.lang === "de"? "Hallo Ludwin" : "fr"? "Bonjour Francois" : "Hello my friend!!"}
                                </h2>

                        </td>
                    </tr>
                </Table>
               
            </div>
            </Container>

        )
}

export default Greetings