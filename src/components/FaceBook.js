import React,{useState} from 'react'
import profiles from '../data/berlin.json'
import FaceBookCard from './FaceBookCard'
import FaceBookButtons from './FaceBookButtons'

function FaceBook() {

    const [getFaceBook,setFaceBook] = useState(profiles)

    return (
        <div className="FaceBook">
            {profiles.map((el,i) => (
                 <FaceBookButtons key={i} {...el}/>
            ))
            }
    
            {profiles.map((el,i) => (
                 <FaceBookCard key={i} {...el}/>
            ))
            }
        </div>
    )
}

export default FaceBook
