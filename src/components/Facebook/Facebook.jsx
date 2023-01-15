import FacebookProfiles from '../../data/berlin.json'
import './Facebook.css'

function Facebook(){
    console.log(FacebookProfiles)
    return(
        <div>
        <div className='buttons-country'>
            <button className='margin-r'>All</button>
            <button className='margin-r'>USA</button>
            <button className='margin-r'>ENGLAND</button>
            <button className='margin-r'>GERMANY</button>
            <button className='margin-r'>MALAYSIA</button>
            <button className='margin-r'>SWEDEN</button>
            <button className='margin-r'>NIGERIA</button>
            <button className='margin-r'>SCOTLAND</button>
            <button className='margin-r'>ITALY</button>
            <button className='margin-r'>FRANCE</button>
        </div>
        <div className='flex-specific'>
        
            {FacebookProfiles.map(contact=>{
                return <div className='facebook-card'>
                    <img className='small' src={contact.img}/>
                    <div className='flex-c flex-ctry'>
                    <h3><span className='bold'>First Name: </span>{contact.firstName}</h3>
                    <h3><span className='bold'>Last Name: </span>{contact.lastName}</h3>
                    <h3><span className='bold'>Country: </span>{contact.lastName}</h3>
                    {contact.isStudent 
                    ? <h3><span className='bold'>Type: </span>Student</h3>
                    : <h3><span className='bold'>Type: </span>Teacher</h3>
                    }
                    </div>

                </div>
            })}
        </div>
        </div>
    )
}

export default Facebook