import './Random.css'



function Random (props) {
    const {min, max } = props
    const randomNUmber = Math.floor((Math.random()* max) + min )

    return (
        <div className='Random'>
            <p>Random value between: {min} and {max} {'=>'} {randomNUmber}</p>
            </div>
    )
}


export default Random