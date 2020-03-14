import React, {Component} from 'react';
import listOfStudents from '../../../../src/data/berlin'

// Styles
import { Container, Table } from 'react-bootstrap';


class StudentsIndex extends Component {
    constructor() {
        super()
        this.state = {students : listOfStudents}
    }
render() {
    return (
        <Container>
            {this.state.students.map(student =>
            <div className="idCard">
                <h3>ID IRONCARDS</h3>
                <Table>
                    <tr>
                        <td>
                            <img className="photo-id" src={student.img} alt={student.firstName}></img>

                        </td>
                        <td>
                            <p>Name: {student.firstName}</p>
                            <p>Last name: {student.lastName}</p>
                            <p>Country: {student.country}</p>
                        </td>
                    </tr>
                </Table>
                
            </div>
                    )}

        </Container>
)
}
}
export default StudentsIndex
