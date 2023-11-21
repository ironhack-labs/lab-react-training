import profiles from '../data/berlin.json';
function FaceBook() {
    return (profiles.map(e => {
        return <div className='cardiii'>
            <img src={e.img} alt="" />
            <p>NAME: {e.firstName} {e.lastName}</p>
            <p>Country:{e.country}    Type: {e.isStudent == true ? "student" : "nini"}</p>
        </div>
    }))
}
export default FaceBook