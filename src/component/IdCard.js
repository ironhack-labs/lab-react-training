export const IdCard = (props) => {
    console.log(props)
    return (<div>
        <img alt="pic" src={props.name.picture}></img>
        <div>
        <p>firstName:{props.name.firstName}</p>
        <p>lastName:{props.name.lastName}</p>
        <p>gender:{props.name.gender}</p>
        <p>hight:{props.name.height}</p>
        <p>birth:{props.birth}</p>
        </div>
        </div>)
}