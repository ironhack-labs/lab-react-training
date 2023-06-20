import profiles from '../data/berlin.json';

// {"firstName": "Aaron", "lastName": "Newell", "country": "England", "img": "https://i.imgur.com/CFgX3Xx.png", "isStudent": false},
 

export default function FaceBook() {
    return (<div className='facebook' >
                { profiles.map(p => <div id="id-card" key={p.img} >
                            <img src={p.img} alt={p.lastName} />
                            <div>
                                <p><span className="label" >First name: </span><span>{p.firstName}</span></p>
                                <p><span className="label" >Last name: </span><span>{p.lastName}</span></p>
                                <p><span className="label" >Country: </span><span>{p.country}</span></p>
                                <p><span className="label" >Type: </span><span>{p.isStudent ? "Student" : "Teacher"}</span></p>
                            </div>
                        </div>)
                }
            </div>);
}