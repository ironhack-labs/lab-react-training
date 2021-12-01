function Random (props){
    const {min, max} = props
    const RandomNumber = Math.floor(Math.random()*max)+min

    return(
        <p>Random value between {min} and {max} => {RandomNumber}</p>
    )

}

export default Random