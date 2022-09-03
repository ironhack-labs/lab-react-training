import berlinData from '../data/berlin.json';

const IdCard = (props) => {
    const { firstName, lastName, gender, height, birth, picture } = props
    const img = new Image()
    return(
        <div className='id-card'>
            <div className='imagem'>
                <img src={props.picture} alt={props.name}/>
            </div>
            
            <div className='dados'> 
                <ul>
                    <li><b>First name: </b> {firstName}</li>
                    <li><b>Last name: </b> {lastName}</li>
                    <li><b>Gender: </b> {gender}</li>
                    <li><b>Heigth: </b> {height}</li>
                    <li><b>Birth: </b> {birth}</li>
                </ul>
            </div>
        </div>       
    )
}

export default IdCard