import './IdCardStyle.css';

const IdCard =(props)=> {
    return ( 
        <div className='IdCard'>
        <img src={props.picture}/>
        <p>Name: {props.firstName}</p>
        <p>Lastname: {props.lastName}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toLocaleString()}</p>
        </div>
     );
}

export default IdCard