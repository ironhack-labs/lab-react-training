import profiles from '../../data/berlin.json';
import './Facebook.css'

const Facebook = () => {



    return (
        <section>
            <h1>Facebook</h1>
            {
                profiles.map(({ firstName, lastName, country, img, isStudent }) => {
                    return (
                        <div className="fbCard">

                            <div className="fbCardImg">
                                <img src={img}></img>
                            </div>
                            <div className="cardInfo">
                                <ul>
                                    <li><strong>First name: </strong>{firstName}</li>
                                    <li><strong>Last name: </strong>{lastName}</li>
                                    <li><strong>Country: </strong>{country}</li>
                                    <li><strong>Type: </strong>{isStudent ? 'Student' : 'Teacher'}</li>
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
        </section>

    )
}



export default Facebook