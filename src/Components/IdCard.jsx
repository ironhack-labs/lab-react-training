import React, {
    Component
} from "react"

class IdCard extends Component {
    render() {
        return ( <
            div className = "person" >
            <
            img src = {
                this.props.picture
            }
            alt = "profile" / >
            <
            div className = 'person-info' >
            <
            p > < b > First name: < /b>{this.props.firstName}</p >
            <
            p > < b > Last name: < /b>{this.props.lastName}</p >
            <
            p > < b > Gender: < /b>{this.props.gender}</p >
            <
            p > < b > Height: < /b>{this.props.height}</p >
            <
            p > < b > Birth: < /b>{this.props.birth}</p >
            <
            /div> < /
            div >
        )
    }
}

export default IdCard