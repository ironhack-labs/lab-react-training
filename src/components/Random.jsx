const Random = props => {

    const { min, max } = props
    let result = (Math.random() * (max - min) + min)





    return (

        <p>Random value between {min} and {max} => {result}</p>

    )

}

export default Random