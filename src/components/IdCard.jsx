import Greeting from "./Greeting"

const IdCard = (props) => {
    
    const {person} = props

    return (
        <>

            <Greeting className="greeting" person={person} />

            <div className="person-card">

                <div>
                    <img src={person.picture} className="person-card-image" alt="person" />
                </div>

                <div className="details">
                    <span>
                        <span className="label">Lastname:</span>
                        {person.lastName}
                    </span>
                    <span>
                        <span className="label">Firstname:</span>
                        {person.firstName}
                    </span>
                    <span>
                        <span className="label">Gender:</span>
                        {person.gender}
                    </span>
                    <span>
                        <span className="label">Height:</span>
                        {person.height}
                    </span>
                    <span>
                        <span className="label">Birth:</span>
                        {person.birth}
                    </span>
                </div>
            </div>
        </>
    )
}

export default IdCard
