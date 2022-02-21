const Random = props => {

const {min, max} = props

const symbol = "=>"

    return (<>

<p>Random value between {min} and {max} {symbol} {Math.floor(Math.random() * (max - min) + min)}</p>




    </>)
}


export default Random;